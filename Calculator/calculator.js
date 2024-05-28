//textDisplay 노드
var textDisplay = document.getElementById("inputDisplay");

//버튼 클릭 시 display에 출력
function btnClick(clickID) {
  var newText = document.getElementById(clickID).value;

  textDisplay.value = textDisplay.value + newText;
}

//back 클릭 시 맨 뒤 문자 삭제
function backClick() {
  textDisplay.value = textDisplay.value.slice(0, -1);
}

//clear 클릭 시 Clear
function clearClick() {
  textDisplay.value = "";
}

//= 클릭 시 사칙연산 결과 출력
function resultClick() {
  const regex = /[0-9]/g; //문자 찾기
  var operator = textDisplay.value.replace(regex, ""); //operator 찾기
  var numArr = textDisplay.value.match(/\d+/g); //숫자 찾기

  switch (operator) {
    case "+":
      textDisplay.value = Number(numArr[0]) + Number(numArr[1]);
      break;
    case "-":
      textDisplay.value = Number(numArr[0]) - Number(numArr[1]);
      break;
    case "*":
      textDisplay.value = Number(numArr[0]) * Number(numArr[1]);
      break;
    case "/":
      textDisplay.value = Number(numArr[0]) / Number(numArr[1]);
      break;
    case "%":
      textDisplay.value = Number(numArr[0]) % Number(numArr[1]);
      break;
  }
}
