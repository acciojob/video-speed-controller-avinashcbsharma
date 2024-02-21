const video = document.querySelector('.player__video');
const progress = document.querySelector('.progress__filled');
const toggleBtn = document.querySelector('.toggle');
const volumeSlider = document.querySelector('input[name="volume"]');
const playbackSpeedSlider = document.querySelector('input[name="playbackSpeed"]');
const skipButtons = document.querySelectorAll('.player__button[data-skip]');

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    const icon = video.paused ? '►' : '❚ ❚';
    toggleBtn.textContent = icon;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.flexBasis = `${percent}%`;
}

function handleSliderUpdate() {
    video[this.name] = this.value;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
toggleBtn.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

volumeSlider.addEventListener('input', handleSliderUpdate);
playbackSpeedSlider.addEventListener('input', handleSliderUpdate);

skipButtons.forEach(button => button.addEventListener('click', skip));
