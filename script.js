// document.getElementById("one").innerText = "1";
// document.getElementById("one").addEventListener("click", () => {
//   console.log("Clicked");
// });

document.getElementById("head").classList = "heading";
document.getElementById("head").innerHTML = "JavaScript Calculator";
document.getElementById("outer").classList = "calculator-container";
document.getElementById("inner").classList = "input-container";
document.getElementById("output").classList = "output-row";
var out = document.getElementById("display-output");
out.classList = "output-text";
document.getElementById("button-container").classList = "button_box";

document.getElementById("btn7").classList = "_button";
document.getElementById("btn7").innerHTML = "7";
document.getElementById("btn7").addEventListener("click", () => {
  document.getElementById("display-output").value += "7";
});

document.getElementById("btn8").classList = "_button";
document.getElementById("btn8").innerHTML = "8";
document.getElementById("btn8").addEventListener("click", () => {
  document.getElementById("display-output").value += "8";
});

document.getElementById("btn9").classList = "_button";
document.getElementById("btn9").innerHTML = "9";
document.getElementById("btn9").addEventListener("click", () => {
  document.getElementById("display-output").value += "9";
});
document.getElementById("btn/").classList = "_button";
document.getElementById("btn/").innerHTML = "/";
document.getElementById("btn/").addEventListener("click", () => {
  document.getElementById("display-output").value += "/";
});

document.getElementById("btn4").classList = "_button";
document.getElementById("btn4").innerHTML = "4";
document.getElementById("btn4").addEventListener("click", () => {
  document.getElementById("display-output").value += "4";
});
document.getElementById("btn5").classList = "_button";
document.getElementById("btn5").innerHTML = "5";
document.getElementById("btn5").addEventListener("click", () => {
  document.getElementById("display-output").value += "5";
});
document.getElementById("btn6").classList = "_button";
document.getElementById("btn6").innerHTML = "6";
document.getElementById("btn6").addEventListener("click", () => {
  document.getElementById("display-output").value += "6";
});
document.getElementById("btn*").classList = "_button";
document.getElementById("btn*").innerHTML = "*";
document.getElementById("btn*").addEventListener("click", () => {
  document.getElementById("display-output").value += "*";
});

document.getElementById("btn1").classList = "_button";
document.getElementById("btn1").innerHTML = "1";
document.getElementById("btn1").addEventListener("click", () => {
  document.getElementById("display-output").value += "1";
});
document.getElementById("btn2").classList = "_button";
document.getElementById("btn2").innerHTML = "2";
document.getElementById("btn2").addEventListener("click", () => {
  document.getElementById("display-output").value += "2";
});
document.getElementById("btn3").classList = "_button";
document.getElementById("btn3").innerHTML = "3";
document.getElementById("btn3").addEventListener("click", () => {
  document.getElementById("display-output").value += "3";
});
document.getElementById("btn-").classList = "_button";
document.getElementById("btn-").innerHTML = "-";
document.getElementById("btn-").addEventListener("click", () => {
  document.getElementById("display-output").value += "-";
});

document.getElementById("btnAC").classList = "_button";
document.getElementById("btnAC").innerHTML = "AC";
document.getElementById("btnAC").addEventListener("click", () => {
  document.getElementById("display-output").value = " ";
});
document.getElementById("btn0").classList = "_button";
document.getElementById("btn0").innerHTML = "0";
document.getElementById("btn0").addEventListener("click", () => {
  document.getElementById("display-output").value += "0";
});
document.getElementById("btn=").classList = "_button";
document.getElementById("btn=").innerHTML = "=";
document.getElementById("btn=").addEventListener("click", () => {
  try {
    const result = eval(document.getElementById("display-output").value);
    if (isNaN(result)) {
      document.getElementById("display-output").value = "Invalid Computation";
    } else {
      document.getElementById("display-output").value = result;
    }
  } catch (error) {
    document.getElementById("display-output").value = "Invalid Computation";
  }
});
document.getElementById("btn+").classList = "_button";
document.getElementById("btn+").innerHTML = "+";
document.getElementById("btn+").addEventListener("click", () => {
  document.getElementById("display-output").value += "+";
});
