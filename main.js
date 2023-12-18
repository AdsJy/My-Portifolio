/* //////////////////////////////////////////////////////// */
function updatePercentage(percent) {
  const progressBar = document.getElementById('progress-bar');
  const percentageText = document.getElementById('percentage');
  
  progressBar.style.width = percent + '%';
  percentageText.innerText = percent + '%';
}

updatePercentage(60);
/* //////////////////////////////////////////////////////// */


/* //////////////////////////////////////////////////////// */
function updateCircularIndicator(percentage) {
  const circle = document.querySelector('.progress');
  const text = document.querySelector('.percentage');

  const circumference = 314;
  const offset = circumference - (percentage / 100) * circumference;

  circle.style.strokeDashoffset = offset;
  text.textContent = percentage + '%';
}

updateCircularIndicator(64);
/* //////////////////////////////////////////////////////// */


/* //////////////////////////////////////////////////////// */
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hiddenNav = document.querySelector('.hidden-nav');

hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    hiddenNav.classList.toggle('active');
});

/* //////////////////////////////////////////////////////// */

  