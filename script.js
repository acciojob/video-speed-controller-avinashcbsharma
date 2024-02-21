 const player = document.querySelector('.player');
        const video = player.querySelector('.viewer');
        const progress = player.querySelector('.progress');
        const progressBar = player.querySelector('.progress__filled');
        const toggleButton = player.querySelector('.toggle');
        const volumeSlider = player.querySelector('input[name="volume"]');
        const playbackRateSlider = player.querySelector('input[name="playbackRate"]');
        const skipButtons = player.querySelectorAll('.player__button[data-skip]');

// Functions
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = video.paused ? '►' : '❚ ❚';
    toggleButton.textContent = icon;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function handleSliderUpdate() {
    video[this.name] = this.value;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggleButton.addEventListener('click', togglePlay);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

volumeSlider.addEventListener('change', handleSliderUpdate);
playbackRateSlider.addEventListener('change', handleSliderUpdate);

skipButtons.forEach(button => button.addEventListener('click', skip));