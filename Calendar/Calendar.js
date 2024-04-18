var tableNode = document.querySelector(".calendarTable"); //<table> 노드 가져오기
var thNode = document.createElement("th"); //th노드 생성
var monthText = document.createTextNode("1월"); //th노드에 사용할 text노드 생성
thNode.appendChild(monthText); //th노드 자식 노드로 설정

tableNode.appendChild(thNode); //table노드 자식노드로 th노드 추가

var dayName = ["일", "월", "화", "수", "목", "금", "토"];
var trNode = document.createElement("tr");
for (let x of dayName) {
  var tdNode = document.createElement("td");
  var dayNameText = document.createTextNode(x);
  tdNode.appendChild(dayNameText);
  trNode.appendChild(tdNode);
  tableNode.appendChild(trNode);
}

var day = 1;
//요일 추가
for (let i = 0; i < 5; i++) {
  var trNode = document.createElement("tr");
  for (let j = 0; j < 7; j++) {
    if (day < 31) {
      var tdNode = document.createElement("td");
      var dayText = document.createTextNode(day++);
      tdNode.appendChild(dayText);
      trNode.appendChild(tdNode);
    } else break;
  }
  tableNode.appendChild(trNode);
}
