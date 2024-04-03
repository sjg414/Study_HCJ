function addList() {
  var newli = document.createElement("li"); //P태그 요소 추가
  var newText = document.querySelector("#inputText"); //input 요소 값 가져오기
  var textNode = document.createTextNode(newText.value); //text노드에 input 요소 값 추가

  var ulNode = document.querySelector("#ulNode"); //상위 요소인 ul 태그 가져오기
  newli.appendChild(textNode); //P태그 요소의 자식 요소로 text노드 추가
  ulNode.appendChild(newli); //ul 요소의 자식 요소로 P태그 추가

  newText.value = "";

  var items = document.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      if (this.parentNode) this.parentNode.removeChild(this);
    });
  }
}
