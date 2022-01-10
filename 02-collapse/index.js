const collapseBlock = document.querySelector('.collapsible');
const collapseBtn = collapseBlock.querySelector('.collapsible__button');
const collapseActionVisible = collapseBtn.querySelector('.collapsible__action--visible');
const collapseActionHidden = collapseBtn.querySelector('.collapsible__action--hidden');
const collapseContent = collapseBlock.querySelector(".collapsible__content");

const setDefaultParams = function () {
  if (collapseBlock) {
    collapseActionVisible.style.display = 'none';
    collapseContent.style.overflow = 'hidden';
  }
};

const collapseContentAnimation = collapseContent.animate(
  {
    height: ["0px", "50px"]
  },
  {
    duration: 500,
    fill: "both",
    easing: "ease-out"
  }
);

collapseContentAnimation.pause();

const showContent = function () {
  collapseActionHidden.style.display = 'none';
  collapseActionVisible.style.display = 'block';
};

const hideContent = function () {
  collapseActionHidden.style.display = 'block';
  collapseActionVisible.style.display = 'none';
};

const toggleBtn = function () {
  if (collapseActionVisible.style.display === 'none') {
    setTimeout(showContent, 250);
  } else if (collapseActionVisible.style.display === 'block') {
    setTimeout(hideContent, 250);
  }

  if (collapseContentAnimation.playState === "paused") {
    collapseContentAnimation.play();
  } else {
    collapseContentAnimation.reverse();
  }
};

document.addEventListener('DOMContentLoaded', setDefaultParams);
collapseBtn.addEventListener('click', toggleBtn);
