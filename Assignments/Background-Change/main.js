const body = document.getElementById("body");
const input = document.getElementById("hex");

let hex;
function red() {
  hex = "#FA0000";
  body.style.backgroundColor = "red";
}

function green() {
  body.style.backgroundColor = "green";
}
function yellow() {
  body.style.backgroundColor = "yellow";
}

function random() {
  const ran = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let number;
  let color = "#";
  for (let i = 0; i <= 5; i++) {
    number = Math.floor(Math.random() * 16);
    color = color + ran[number];
  }
  console.log(color);
  body.style.backgroundColor = color;
  console.log(input);
  input.value = color;
}

function reset() {
  body.style.backgroundColor = "white";
  input.value = "";
}
