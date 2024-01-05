let result = document.getElementById("input")
function calculator(number) {
  result.value += number
}

function equ() {
  result.value = eval(result.value);
}
function scr() {
  result.value = "";
}
function del() {
  result.value = result.value.slice(0, -1);
}
