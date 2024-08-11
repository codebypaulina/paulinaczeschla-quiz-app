/******************************** CREATE CARDS  ********************************/

const form = document.querySelector('[data-js="form"]');
const newCardContainer = document.querySelector(
  '[data-js="new-card-container"]'
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  // ----------- CATEGORIES: add # first ----------- //
  if (!data.tag.startsWith("#")) {
    data.tag = "#" + data.tag;
  }
  // ----------------------------------------------- //

  const question = data.question;
  const answer = data.answer;
  const tag = data.tag;

  // ------------- DOM elements for card ------------- //
  const liElementCard = document.createElement("li");
  liElementCard.classList.add("card");

  const bookmarkButton = document.createElement("button"); // ---------------------- BUTTON
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.setAttribute("aria-label", "bookmark this question");
  bookmarkButton.setAttribute("data-js", "bookmark-button"); // data-js nötig?
  liElementCard.appendChild(bookmarkButton);

  const bookmarkIcon = document.createElement("img"); // ------------------------- BOOKMARK
  bookmarkIcon.src = "./img/bookmark.png";
  bookmarkIcon.alt = "bookmark icon";
  bookmarkIcon.classList.add("bookmark-icon");
  bookmarkIcon.setAttribute("data-js", "bookmark-icon"); // data-js nötig?
  bookmarkButton.appendChild(bookmarkIcon);

  const questionElement = document.createElement("h3");
  questionElement.classList.add("card-question");
  questionElement.textContent = question; // ---------------------- QUESTION
  liElementCard.appendChild(questionElement);

  const answerButton = document.createElement("button");
  answerButton.classList.add("button", "button--show-answer");
  answerButton.setAttribute("role", "button");
  answerButton.setAttribute("aria-label", "Show Answer");
  answerButton.setAttribute("data-js", "answer-button"); // data-js nötig?
  answerButton.textContent = "show answer";
  liElementCard.appendChild(answerButton);

  const answerElement = document.createElement("p");
  answerElement.classList.add("card-answer", "hidden");
  answerElement.setAttribute("data-js", "card-answer"); // data-js nötig?
  answerElement.textContent = answer; // ----------------------------- ANSWER
  liElementCard.appendChild(answerElement);

  const ulElementCategories = document.createElement("ul");
  ulElementCategories.classList.add("categories");
  liElementCard.appendChild(ulElementCategories);

  const categoryItem = document.createElement("li");
  categoryItem.textContent = tag; // ------------------------------------ TAG
  ulElementCategories.appendChild(categoryItem);

  newCardContainer.appendChild(liElementCard);

  form.reset();
});

/*******************************************************************************/
/*******************************************************************************/

/********************************* TEXT COUNTER ********************************/
/************************************ LONG *************************************

// ------ QUESTION
const questionElement = document.querySelector('[data-js="input-question"]');
const maxLengthQuestion = questionElement.getAttribute("maxlength");
const amountLeftQuestion = document.querySelector(
  '[data-js="amount-left-question"]'
);

const updateAmountLeftQuestion = (value) => {
  amountLeftQuestion.innerText = value;
};

updateAmountLeftQuestion(maxLengthQuestion);

questionElement.addEventListener("input", () => {
  updateAmountLeftQuestion(maxLengthQuestion - questionElement.value.length);
});

// ------ ANSWER
const answerElement = document.querySelector('[data-js="input-answer"]');
const maxLengthAnswer = answerElement.getAttribute("maxlength");
const amountLeftAnswer = document.querySelector(
  '[data-js="amount-left-answer"]'
);

const updateAmountLeftAnswer = (value) => {
  amountLeftAnswer.innerText = value;
};

updateAmountLeftAnswer(maxLengthAnswer);

answerElement.addEventListener("input", () => {
  updateAmountLeftAnswer(maxLengthAnswer - answerElement.value.length);
});

/*******************************************************************************/
/********************************* TEXT COUNTER ********************************/
/************************************ SHORT ************************************/

const updateAmountLeft = (inputType) => {
  const inputElement = document.querySelector(`[data-js="input-${inputType}"]`);
  const amountLeftElement = document.querySelector(
    `[data-js="amount-left-${inputType}"]`
  );
  const maxLength = inputElement.getAttribute("maxlength");

  // Anzeige maxlength
  amountLeftElement.innerText = maxLength;

  // Eventlistener
  inputElement.addEventListener("input", () => {
    amountLeftElement.innerText = maxLength - inputElement.value.length;
  });
};

// characters left aktualisieren
updateAmountLeft("question");
updateAmountLeft("answer");

/*******************************************************************************/
