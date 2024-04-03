function addList() {
  //table - tr - th - input(checkbox) - label(text) - input(button)
  var trNode = document.createElement("tr"); //tr 요소 추가
  var tdNode = document.createElement("td"); //td 요소 추가
  var labelNode = document.createElement("label"); //label 요소 추가
  var checkboxNode = document.createElement("input"); //input(checkbox) 요소 추가
  var buttonNode = document.createElement("input"); //input(button) 요소 추가
  var textValue = document.getElementById("textInput").value; //input text value 값 가져오기 (label, checkbox value)
  var textNode = document.createTextNode(textValue); //텍스트 노드에 value 값 저장

  tdNode.className = "tdClass"; //td class 설정

  //checkbox 설정
  checkboxNode.type = "checkbox";
  checkboxNode.value = textValue;
  checkboxNode.name = "checkboxList";

  //button 설정
  buttonNode.type = "button";
  buttonNode.value = "삭제";
  buttonNode.id = "deleteButton";

  labelNode.appendChild(textNode); //label요소에 text 요소 연결
  tdNode.appendChild(checkboxNode); //th요소에 checkbox 연결
  tdNode.appendChild(labelNode); //th요소에 label 연결
  tdNode.appendChild(buttonNode); //th요소에 button 연결
  trNode.appendChild(tdNode); //tr요소에 th요소 연결
  document.getElementById("tbodyNode").appendChild(trNode); //table요소의 자식노드로 tr요소 연결

  deleteEvent(); //삭제버튼 클릭 시 함수 실행
}

function deleteEvent() {
  //삭제 클릭 시 실행
  var buttonItems = document.querySelectorAll("#deleteButton");

  for (let i = 0; i < buttonItems.length; i++) {
    buttonItems[i].addEventListener("click", function () {
      this.parentNode.style.color = "#ccc";
      this.parentNode.style.textDecoration = "line-through";
      document.getElementsByName("checkboxList")[i].checked = true;
    });
  }
}

deleteEvent();
