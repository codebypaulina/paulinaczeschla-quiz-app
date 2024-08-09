const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="button-dark-mode"]');
const darkModeSlider = document.querySelector('[data-js="slider"]');

darkModeButton.addEventListener("click", () => {
  darkModeButton.classList.toggle("active");
  darkModeSlider.classList.toggle("active");
  bodyElement.classList.toggle("dark");
  console.log("Button clicked!");
});
