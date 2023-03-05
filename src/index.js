import Themes, { setTheme } from "./js/theme.js";
import {
  switchBtn,
  switchCircle,
  numberBtns,
  inputUI,
  delBtn,
  resetBtn,
  equalBtn,
} from "./js/ui.js";

// global states of the application locates here
let state = {
  theme: 0,
  input: "",
};

let { theme, input } = state;

switchBtn.addEventListener("click", function () {
  if (theme == 0) {
    setTheme(Themes[theme + 1]);
    switchCircle.style.transform = "translateX(21px)";
    theme = 1;
  } else if (theme == 1) {
    setTheme(Themes[theme + 1]);
    switchCircle.style.transform = "translateX(43px)";
    theme = 2;
  } else {
    setTheme(Themes[0]);
    switchCircle.style.transform = "translateX(0px)";
    theme = 0;
  }
});

numberBtns.forEach(function (numberBtn) {
  numberBtn.addEventListener("click", function () {
    input += numberBtn.textContent;
    inputUI.value = input;
  });
});

delBtn.addEventListener("click", function () {
  const sliced = inputUI.value.toString().slice(0, -1);
  input = sliced;
  inputUI.value = sliced;
});

resetBtn.addEventListener("click", function () {
  input = "";
  inputUI.value = input;
});

equalBtn.addEventListener("click", function () {
  input = eval(input);
  inputUI.value = input;
});

inputUI.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    input = eval(inputUI.value);
    inputUI.value = input;
  }
});

inputUI.addEventListener("focus", function () {
  this.selectionStart = this.selectionEnd = this.value.length;
});
