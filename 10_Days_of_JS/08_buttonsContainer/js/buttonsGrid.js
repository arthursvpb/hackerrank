const button5 = document.querySelector("#btn5");
const buttonsArray = [1, 2, 3, 6, 9, 8, 7, 4];

button5.addEventListener("click", () => {
  // Put on the beginning of the array popping out the last one
  buttonsArray.unshift(buttonsArray.pop());

  //Clockwise the button numbers
  document.querySelector("#btn1").innerHTML = buttonsArray[0];
  document.querySelector("#btn2").innerHTML = buttonsArray[1];
  document.querySelector("#btn3").innerHTML = buttonsArray[2];
  document.querySelector("#btn6").innerHTML = buttonsArray[3];
  document.querySelector("#btn9").innerHTML = buttonsArray[4];
  document.querySelector("#btn8").innerHTML = buttonsArray[5];
  document.querySelector("#btn7").innerHTML = buttonsArray[6];
  document.querySelector("#btn4").innerHTML = buttonsArray[7];
});
