const ratingState = document.getElementById("rating-state");
const thanksState = document.getElementById("thanks-state");
const ratings = document.querySelectorAll(".rate");
const result = document.getElementById("result");

const submitButton = document.getElementById("button");

ratings.forEach((rate) => {
  rate.addEventListener("click", () => {
    result.innerHTML = `${rate.innerHTML} `;
  });
});

submitButton.addEventListener("click", () => {
  ratingState.classList.add("disabled");
  thanksState.classList.remove("disabled");
});
