var check = document.querySelectorAll(".check"); //check 요소 가져오기

//check 요소 클릭 시, changeStyle 함수 실행
for (let i = 0; i < check.length; i++) {
  check[i].addEventListener("click", changeStyle);
}

function changeStyle() {
  //check의 부모노드인 li 요소의 스타일 변경(회색, 가운데 취소선)
  this.parentNode.style.color = "#ccc";
  this.parentNode.style.textDecoration = "line-through";
}
