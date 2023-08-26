const $stageVideo = document.querySelector('.stage-video');
const $playButton = document.querySelector('.controller--play');
const $pauseButton = document.querySelector('.controller--pause');

$playButton.addEventListener('click', () => {
  $stageVideo.play();
  $playButton.classList.add('hide');
  $pauseButton.classList.remove('hide');
});

$pauseButton.addEventListener('click', () => {
  $stageVideo.pause();
  $playButton.classList.remove('hide');
  $pauseButton.classList.add('hide');
});
