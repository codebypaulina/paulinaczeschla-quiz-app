const bodyElement = document.querySelector('[data-js="body"]');

const buttonDarkMode = document.querySelector('[data-js="button-dark-mode"]');
const sliderDarkMode = document.querySelector('[data-js="slider"]');

buttonDarkMode.addEventListener("click", () => {
  buttonDarkMode.classList.toggle("active");
  sliderDarkMode.classList.toggle("active");
  bodyElement.classList.toggle("dark");
  console.log("Button clicked!");
});
