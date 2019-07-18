document.getElementById("resultBtn").onclick = function() {
  var input = document.getElementById("numberInput").value;
  input = eval(input).toString();
  input = input.substring(0, 15);
  document.getElementById("numberInput").value = input;
}

document.getElementById("clean").onclick = function() {
  var numberInput = document.getElementById("numberInput");
  var input = numberInput.value;
  var arr = input.split('');
  arr.pop();
  input = arr.join('');
  numberInput.value = input;
}

document.getElementById('allClean').onclick = function() {
  document.getElementById("numberInput").value = '';
}

var numbers = document.getElementsByClassName('inputNumber');
for (var i = 0; i < numbers.length; i++) {
  numbers[i].onclick = function() {
    var inputNumber = document.getElementById('numberInput');
    inputNumber.value += this.value;
  }
}
