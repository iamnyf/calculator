let result = "";

function updateResult(value) {
  result += value;
  document.getElementById("result").value = result;
}

function calculateResult() {
  result = eval(result);
  document.getElementById("result").value = result;
}

function clearResult() {
  result = "";
  document.getElementById("result").value = "";
}

function backspace() {
  result = result.slice(0, -1);
  document.getElementById("result").value = result;
}
