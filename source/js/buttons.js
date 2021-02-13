// button is used to disable the buttons
const button = document.querySelectorAll("button"); // 0 is help, 1 is start, 2 is stop

// References to start and stop buttons
var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");

// POMO GO (start button clicked)
startButton.addEventListener("click", function () {
  startTimer(); // Call start function in controller
  button[1].disabled = true; // Disable start button
  button[2].disabled = false; // Enable stop button
});

// POMO STAHP (stop button clicked)
stopButton.addEventListener("click", function () {
  stopTimer(); // Call stop function in controller
  button[2].disabled = true; // Disable stop button
  button[1].disabled = false; // Enable start button
});

// help page button logics
var modal = document.getElementById("myModal");
var helpBtn = document.getElementById("help-button");
var closeBtn = document.getElementsByClassName("close")[0];
let shadow = document.getElementById("shadow");

// Close popup and remove shadow
function closePopup() {
  modal.classList.remove("modal-show");
  shadow.classList.remove("visible");
}

// Toggle popup on help button click
helpBtn.onclick = function () {
  modal.classList.toggle("modal-show");
  shadow.classList.toggle("visible");
};

// Toggle popup on close button click
closeBtn.onclick = function () {
  modal.classList.toggle("modal-show");
  shadow.classList.toggle("visible");
};

// listener for start button
//      on "click"
//          call function in controller
//              function sets cycle to pomo (pomo started)
//                  that function could call timer module with (time, running = 1)
//
// listener for stop button
//      on "click"
//          call function in controller
//              function resets cycle
//                  that function sets running = 0
