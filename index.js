/******************************** DARK MODE  ********************************

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="button-dark-mode"]');
const darkModeSlider = document.querySelector('[data-js="slider"]');

darkModeButton.addEventListener("click", () => {
  darkModeButton.classList.toggle("active");
  darkModeSlider.classList.toggle("active");
  bodyElement.classList.toggle("dark");
});

/***************************************************************************/

/****************************** BOOKMARK ICON ******************************/

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

bookmarkButton.addEventListener("click", () => {
  const bookmarkIconSrc = bookmarkIcon.src;

  if (bookmarkIconSrc.endsWith("bookmark.png")) {
    bookmarkIcon.src = "./img/bookmark_filled.png"; // warum muss ich hier trotzdem "bookmarkIcon.src" schreiben, obwohl oben in der Funktion "bookmarkIconSrc" definiert wurde?
    return;
  }
  bookmarkIcon.src = "./img/bookmark.png";
});

/***************************************************************************/

/****************************** ANSWER BUTTON ******************************/
