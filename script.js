document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.player__video.viewer');
  const progressBar = document.querySelector('.progress__filled');
  const playButton = document.querySelector('.player__button');
  const volumeInput = document.querySelector('.player__slider[name="volume"]');
  const playbackSpeedInput = document.querySelector('.player__slider[name="playbackRate"]');
  const rewindButton = document.querySelector('.player__button[data-skip="-10"]');
  const forwardButton = document.querySelector('.player__button[data-skip="25"]');

  // Set video source
  video.src = 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4';

  // Play/Pause toggle
  playButton.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      playButton.textContent = '❚ ❚';
    } else {
      video.pause();
      playButton.textContent = '►';
    }
  });

  // Update progress bar
  video.addEventListener('timeupdate', function () {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${progress}%`;
  });

  // Set volume
  volumeInput.addEventListener('input', function () {
    video.volume = volumeInput.value;
  });

  // Set playback speed
  playbackSpeedInput.addEventListener('input', function () {
    video.playbackRate = playbackSpeedInput.value;
  });

  // Rewind 10 seconds
  rewindButton.addEventListener('click', function () {
    video.currentTime -= 10;
  });

  // Forward 25 seconds
  forwardButton.addEventListener('click', function () {
    video.currentTime += 25;
  });

  // Handle video duration error
  video.addEventListener('loadedmetadata', function () {
    if (video.duration !== 60.08) {
      console.error('Error: Video duration is not as expected.');
    }
  });
});
