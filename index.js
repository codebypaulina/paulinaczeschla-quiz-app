/******************************** DARK MODE  ********************************

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="button-dark-mode"]');
const darkModeSlider = document.querySelector('[data-js="slider"]');

darkModeButton.addEventListener("click", () => {
  darkModeButton.classList.toggle("active");
  darkModeSlider.classList.toggle("active");
  bodyElement.classList.toggle("dark");
});

----------------------------------------------------> WIESO BLOCKT DARK MODE FOLGENDE(N) EVENTLISTENER?

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

const answerButton = document.querySelector('[data-js="answer-button"]');
const answerText = document.querySelector('[data-js="card-answer"]');

answerButton.addEventListener("click", () => {
  if (answerText.classList.contains("hidden")) {
    answerText.classList.remove("hidden");
    answerButton.textContent = "hide answer";
    return;
  }
  answerText.classList.add("hidden");
  answerButton.textContent = "show answer";
});

/***************************************************************************/
