/******************************** DARK MODE  ********************************/

const bodyElement = document.querySelector('[data-js="body"]');
const textboxAboutMe = document.querySelector('[data-js="about-me"]');
const textboxSettings = document.querySelector('[data-js="settings"]');

const iconQuestion = document.querySelector('[data-js="icon-questions-img"]');
const iconBookmarks = document.querySelector('[data-js="icon-bookmarks-img"]');

const darkModeButton = document.querySelector('[data-js="button-dark-mode"]');
const darkModeSlider = document.querySelector('[data-js="slider"]');

darkModeButton.addEventListener("click", () => {
  darkModeButton.classList.toggle("active");
  darkModeSlider.classList.toggle("active");

  bodyElement.classList.toggle("dark-mode");
  textboxAboutMe.classList.toggle("dark-mode");
  textboxSettings.classList.toggle("dark-mode");

  if (bodyElement.classList.contains("dark-mode")) {
    iconQuestion.src = "./img/question_white.png";
    iconBookmarks.src = "./img/bookmark_white.png";
  } else {
    iconQuestion.src = "./img/question_black.png";
    iconBookmarks.src = "./img/bookmark_filled.png";
  }
});

/***************************************************************************/
