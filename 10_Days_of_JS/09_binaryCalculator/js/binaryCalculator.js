// Initializing variables
const btns = document.querySelectorAll(".btn");
const res = document.querySelector("#res");
let operators = /[+]|[-]|[*]|[/]/;

// Add a event for every button
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Search for the clicked button
    if (btn.id == "btn0") {
      res.innerHTML += "0";
    } else if (btn.id == "btn1") {
      res.innerHTML += "1";
    } else if (btn.id == "btnClr") {
      res.innerHTML = "";
    }

    // Test if there is an operation in the result
    hasOperation = operators.test(res.innerHTML);

    // Only proceed if there isn't any operation
    if (!hasOperation) {
      if (btn.id == "btnSum") {
        res.innerHTML += "+";
      } else if (btn.id == "btnSub") {
        res.innerHTML += "-";
      } else if (btn.id == "btnMul") {
        res.innerHTML += "*";
      } else if (btn.id == "btnDiv") {
        res.innerHTML += "/";
      }
      // If there is an operation, calculate it
    } else if (hasOperation) {
      if (btn.id == "btnEql") {
        // Take the result div innerHTML
        let numbers = res.innerHTML;
        let operation = res.innerHTML;

        // Manipulate to separate the correct operator and the numbers
        numbers = numbers.split(operators);
        operation = operation.match(operators);

        // Converte object to int
        number1 = parseInt(numbers[0], 2);
        number2 = parseInt(numbers[1], 2);
        operation = operation[0];

        // Evaluate the string and convert do binary
        let finalResult = eval(`${number1 + operation + number2}`).toString(2);

        // Display the result in the result div
        res.innerHTML = finalResult;
      }
    }
  });
});
