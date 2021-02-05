
function addNum(){
  var num1 = parseFloat(document.getElementById("firstNum").value);
  var num2 = parseFloat(document.getElementById("secondNum").value);
  var answer = document.getElementById("ans");
  answer.value = num1 + num2;
}

function subNum(){
  var num1 = parseFloat(document.getElementById("firstNum").value);
  var num2 = parseFloat(document.getElementById("secondNum").value);
  var answer = document.getElementById("ans");
  answer.value = num1 - num2;
}

function multiNum(){
  var num1 = parseFloat(document.getElementById("firstNum").value);
  var num2 = parseFloat(document.getElementById("secondNum").value);
  var answer = document.getElementById("ans");
  answer.value = num1 * num2;
}

function divNum(){
  var num1 = parseFloat(document.getElementById("firstNum").value);
  var num2 = parseFloat(document.getElementById("secondNum").value);
  var answer = document.getElementById("ans");
  answer.value = num1 / num2;
}
