function doAdd() {
  let sum = 0;
  let input1 = document.getElementById("first-num").value;
  let input2 = document.getElementById("second-num").value;
  input1 = Number(input1);
  input2 = Number(input2);
  sum = input1 + input2;
  console.log(sum);
  document.getElementById("output").innerHTML = sum;

  if (sum >= 0) {
    document.getElementById("output").style.color = "black";
  } else if (sum < 0) {
    document.getElementById("output").style.color = "red";
  }
}

function doSubtract() {
  let diff = 0;
  let input1 = document.getElementById("first-num").value;
  let input2 = document.getElementById("second-num").value;
  input1 = Number(input1);
  input2 = Number(input2);
  diff = input1 - input2;
  document.getElementById("output").innerHTML = diff;

  if (diff >= 0) {
    document.getElementById("output").style.color = "black";
  } else if (diff < 0) {
    document.getElementById("output").style.color = "red";
  }
}

function doMultiply() {
  let product = 0;
  let input1 = document.getElementById("first-num").value;
  let input2 = document.getElementById("second-num").value;
  input1 = Number(input1);
  input2 = Number(input2);
  product = input1 * input2;
  document.getElementById("output").innerHTML = product;

  if (product >= 0) {
    document.getElementById("output").style.color = "black";
  } else if (product < 0) {
    document.getElementById("output").style.color = "red";
  }
}

function doDivide() {
  let quotient = 0;
  let input1 = document.getElementById("first-num").value;
  let input2 = document.getElementById("second-num").value;
  input1 = Number(input1);
  input2 = Number(input2);
  quotient = input1 / input2;
  document.getElementById("output").innerHTML = quotient;

  if (quotient >= 0) {
    document.getElementById("output").style.color = "black";
  } else if (quotient < 0) {
    document.getElementById("output").style.color = "red";
  }
}

function doPower() {
  let power;
  let input1;
  let input2;
  input1 = document.getElementById("first-num").value;
  console.log(input1);
  input1 = Number(input1);
  input2 = document.getElementById("second-num").value;
  console.log(input2);
  input2 = Number(input2);
  bounds = input2;
  power = 1;

  // Set absolute val bounds if negative
  if (input2 < 0) {
    bounds *= -1;
  }

  for (let i = 1; i <= bounds; i++) {
    power = power * input1;
  }

  if (input2 < 0) {
    power = 1 / power;
  }

  document.getElementById("output").innerHTML = power;

  if (power >= 0) {
    document.getElementById("output").style.color = "black";
  } else if (power < 0) {
    document.getElementById("output").style.color = "red";
  }
}

function doClear() {
  document.getElementById("first-num").value = "";
  document.getElementById("second-num").value = "";
  document.getElementById("output").innerHTML = "";
}
