function updateProgress(percentage) {
  const progressBar = document.querySelector('.progress');
  progressBar.style.width = `${percentage}%`;
}