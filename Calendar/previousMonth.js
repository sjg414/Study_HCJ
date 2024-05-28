var today = new Date(); //현재 날짜
var year = today.getFullYear();
var month = today.getMonth() + 1; //현재 월

function preMonth() {
  //월 텍스트 삭제
  var thMonth = document.getElementById("thMonth");
  thMonth.innerHTML = "";
  //일 삭제
  var trNodeList = document.querySelectorAll("tr");
  for (let i = 2; i < trNodeList.length; i++) {
    trNodeList[i].remove();
  }

  month = month - 1; //이전 달
  if (month < 1) {
    month += 12;
    year--;
  }

  var firstDay = new Date(year, month - 1, 1).getDay(); //1일 요일 구하기
  var lastDay = new Date(year, month, 0).getDate(); //마지막 날짜 구하기

  var tableNode = document.querySelector(".calendarTable"); //<table> 노드 가져오기
  var thMonthNode = document.getElementById("thMonth"); //thMonthNode 가져오기

  var monthText = document.createTextNode(year + "년" + month + "월"); //th노드에 사용할 text노드 생성
  thMonthNode.appendChild(monthText); //th노드 자식 노드로 설정

  // tableNode.appendChild(thNode); //table노드 자식노드로 th노드 추가

  // var dayName = ["일", "월", "화", "수", "목", "금", "토"];
  // var trNode = document.createElement("tr");
  // for (let x of dayName) {
  //   var tdNode = document.createElement("td");
  //   var dayNameText = document.createTextNode(x);
  //   tdNode.className = "tdClass";
  //   tdNode.appendChild(dayNameText);
  //   trNode.appendChild(tdNode);
  //   tableNode.appendChild(trNode);
  // }

  var dayCount = 1;

  //요일 추가
  for (let i = 0; i < 6; i++) {
    var trNode = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (firstDay !== 0) {
        //시작 요일 이전은 공백으로 채우기
        var tdNode = document.createElement("td");
        var dayText = document.createTextNode("");
        tdNode.className = "tdClass";
        tdNode.appendChild(dayText);
        trNode.appendChild(tdNode);
        firstDay--;
      } else {
        if (dayCount <= lastDay) {
          var tdNode = document.createElement("td");
          var dayText = document.createTextNode(dayCount++);
          tdNode.className = "tdClass";
          tdNode.appendChild(dayText);
          trNode.appendChild(tdNode);
        } else break;
      }
    }
    tableNode.appendChild(trNode);
  }
  dayCount = 1; //초기화
}
