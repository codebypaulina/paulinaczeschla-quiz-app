const form = document.querySelector('[data-js="form"]');
const newCardContainer = document.querySelector(
  '[data-js="new-card-container"]'
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const question = data.question;
  const answer = data.answer;
  const tag = data.tag;

  /**************************** DOM elements for card ****************************/
  const liElementCard = document.createElement("li");
  liElementCard.classList.add("card");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.setAttribute("aria-label", "bookmark this question");
  bookmarkButton.setAttribute("data-js", "bookmark-button"); // data-js nötig?
  liElementCard.appendChild(bookmarkButton);

  const bookmarkIcon = document.createElement("img");
  bookmarkIcon.src = "./img/bookmark.png";
  bookmarkIcon.alt = "bookmark icon";
  bookmarkIcon.classList.add("bookmark-icon");
  bookmarkIcon.setAttribute("data-js", "bookmark-icon"); // data-js nötig?
  bookmarkButton.appendChild(bookmarkIcon);

  const questionElement = document.createElement("h3");
  questionElement.classList.add("card-question");
  questionElement.textContent = question; // ----------------------------------- QUESTION
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
  answerElement.textContent = answer; // ----------------------------------------- ANSWER
  liElementCard.appendChild(answerElement);

  const ulElementCategories = document.createElement("ul");
  ulElementCategories.classList.add("categories");
  liElementCard.appendChild(ulElementCategories);

  const categoryItem = document.createElement("li");
  categoryItem.textContent = tag; // ------------------------------------------------ TAG
  ulElementCategories.appendChild(categoryItem);

  newCardContainer.appendChild(liElementCard);
});
