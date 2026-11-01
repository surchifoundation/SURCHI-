/**
 * Sets up 100% resilient autoplay and continuous looping on iOS (iPhone Safari / WebKit)
 * and Android devices.
 * 
 * Resolves iOS quirks:
 * 1. Forces muted, playsinline, and webkit-playsinline attributes into the raw DOM.
 * 2. Suppresses native controls and prevents pause / play-button badges.
 * 3. Immediately triggers play on load, canplay, and loadedmetadata.
 * 4. Ensures continuous looping even if iOS pauses video on loop boundary or backgrounding.
 * 5. Handles iOS Low Power Mode via touch/scroll interaction listener to trigger play without any button.
 */
export function setupContinuousAutoplay(video: HTMLVideoElement | null): () => void {
  if (!video) return () => {};

  // Ensure video properties and attributes are strictly set for WebKit / Safari
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.loop = true;
  video.controls = false;
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', 'true');
  video.setAttribute('x5-playsinline', 'true');
  video.setAttribute('preload', 'auto');
  video.setAttribute('disablePictureInPicture', 'true');
  video.setAttribute('disableRemotePlayback', 'true');

  const tryPlay = () => {
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy restriction (e.g. iOS Low Power Mode)
      });
    }
  };

  // Immediate attempt
  tryPlay();

  // Retry on media loading milestones
  const onMediaReady = () => tryPlay();
  video.addEventListener('loadedmetadata', onMediaReady);
  video.addEventListener('canplay', onMediaReady);
  video.addEventListener('loadeddata', onMediaReady);

  // iOS Safari loop fix: rewind and restart when ended
  const onEnded = () => {
    video.currentTime = 0;
    tryPlay();
  };
  video.addEventListener('ended', onEnded);

  // If paused unintentionally (e.g. browser power saver), resume
  const onPause = () => {
    if (!video.ended) {
      tryPlay();
    }
  };
  video.addEventListener('pause', onPause);

  // Global user gesture unlock for iOS Low Power Mode:
  // When user taps or scrolls the screen on iPhone, video starts playing automatically
  const unlockPlay = () => {
    tryPlay();
  };
  window.addEventListener('touchstart', unlockPlay, { passive: true });
  window.addEventListener('touchend', unlockPlay, { passive: true });
  window.addEventListener('scroll', unlockPlay, { passive: true });
  window.addEventListener('click', unlockPlay, { passive: true });

  const onVisibilityChange = () => {
    if (!document.hidden) {
      tryPlay();
    }
  };
  document.addEventListener('visibilitychange', onVisibilityChange);

  // Cleanup function
  return () => {
    video.removeEventListener('loadedmetadata', onMediaReady);
    video.removeEventListener('canplay', onMediaReady);
    video.removeEventListener('loadeddata', onMediaReady);
    video.removeEventListener('ended', onEnded);
    video.removeEventListener('pause', onPause);
    window.removeEventListener('touchstart', unlockPlay);
    window.removeEventListener('touchend', unlockPlay);
    window.removeEventListener('scroll', unlockPlay);
    window.removeEventListener('click', unlockPlay);
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
}
