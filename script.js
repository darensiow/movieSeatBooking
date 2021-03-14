//Fetch DOM elements from HTML
const container = document.querySelector("div.container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)"); //querySelectorAll returns an array-like object
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const theaterSelect = document.getElementById("theater");
let ticketPrice = +movieSelect.value; //movieSelect.value returns a string e.g. "10" Adding '+' in front of it converts it into a number

// Update seat count and total price
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

//Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Convert selected seats to available seats
function convertSeats() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  selectedSeats.forEach(function (element) {
    element.classList.remove("selected");
  });
}

//Theater select event - all selected seats revert to available seats
theaterSelect.addEventListener("change", () => {
  convertSeats();
  updateSelectedCount();
});

//Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});
