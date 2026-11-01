/**
 * Sets up 100% resilient autoplay and continuous looping on iOS (iPhone Safari / WebKit)
 * and Android devices.
 * 
 * Resolves iOS quirks:
 * 1. Forces muted, playsinline, and webkit-playsinline attributes into raw DOM.
 * 2. Employs IntersectionObserver to trigger play as soon as the video is in view.
 * 3. Catches iOS Safari Low Power Mode by using touchstart, touchmove, and scroll unlocks.
 * 4. Listens to pageshow, loadedmetadata, canplay, and loadeddata.
 * 5. Handles loop restarts explicitly without showing play icons.
 */
export function setupContinuousAutoplay(video: HTMLVideoElement | null): () => void {
  if (!video) return () => {};

  // Force properties required by WebKit / iOS Safari
  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
  video.playsInline = true;
  video.loop = true;
  video.controls = false;
  
  // Set explicit HTML attributes for WebKit DOM parser
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', 'true');
  video.setAttribute('x5-playsinline', 'true');
  video.setAttribute('x5-video-player-type', 'h5');
  video.setAttribute('preload', 'auto');
  video.setAttribute('disablePictureInPicture', 'true');
  video.setAttribute('disableRemotePlayback', 'true');

  const tryPlay = () => {
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    const promise = video.play();
    if (promise !== undefined) {
      promise.catch(() => {
        // Autoplay policy restriction (e.g. initial low-power mode until interaction)
      });
    }
  };

  // Immediate attempt
  tryPlay();

  // If video hasn't loaded metadata yet, trigger load
  if (video.readyState === 0) {
    try {
      video.load();
    } catch {
      // Ignore load error
    }
  }

  // Media loading event listeners
  const onMediaReady = () => tryPlay();
  video.addEventListener('loadedmetadata', onMediaReady);
  video.addEventListener('canplay', onMediaReady);
  video.addEventListener('canplaythrough', onMediaReady);
  video.addEventListener('loadeddata', onMediaReady);

  // iOS Safari loop fix: rewind and restart when ended
  const onEnded = () => {
    video.currentTime = 0;
    tryPlay();
  };
  video.addEventListener('ended', onEnded);

  // If paused unexpectedly, resume
  const onPause = () => {
    if (!video.ended) {
      tryPlay();
    }
  };
  video.addEventListener('pause', onPause);

  // Intersection Observer: Trigger play as soon as user scrolls the video into view on mobile
  let observer: IntersectionObserver | null = null;
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tryPlay();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(video);
  }

  // Global user gesture unlock for iOS Safari Low Power Mode:
  // As soon as the user touches, scrolls, or interacts with the screen on iPhone, video starts playing
  const unlockPlay = () => {
    tryPlay();
  };
  window.addEventListener('touchstart', unlockPlay, { passive: true });
  window.addEventListener('touchmove', unlockPlay, { passive: true });
  window.addEventListener('touchend', unlockPlay, { passive: true });
  window.addEventListener('scroll', unlockPlay, { passive: true });
  window.addEventListener('click', unlockPlay, { passive: true });

  // Page visibility & iOS pageshow (handles returning from background or navigating)
  const onVisibilityChange = () => {
    if (!document.hidden) {
      tryPlay();
    }
  };
  document.addEventListener('visibilitychange', onVisibilityChange);
  window.addEventListener('pageshow', tryPlay);

  // Periodic check during first 3 seconds to guarantee start
  let retryCount = 0;
  const intervalId = setInterval(() => {
    retryCount++;
    if (video && video.paused) {
      tryPlay();
    }
    if (retryCount >= 6) {
      clearInterval(intervalId);
    }
  }, 500);

  // Cleanup function
  return () => {
    clearInterval(intervalId);
    if (observer) {
      observer.disconnect();
    }
    video.removeEventListener('loadedmetadata', onMediaReady);
    video.removeEventListener('canplay', onMediaReady);
    video.removeEventListener('canplaythrough', onMediaReady);
    video.removeEventListener('loadeddata', onMediaReady);
    video.removeEventListener('ended', onEnded);
    video.removeEventListener('pause', onPause);
    window.removeEventListener('touchstart', unlockPlay);
    window.removeEventListener('touchmove', unlockPlay);
    window.removeEventListener('touchend', unlockPlay);
    window.removeEventListener('scroll', unlockPlay);
    window.removeEventListener('click', unlockPlay);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    window.removeEventListener('pageshow', tryPlay);
  };
}
