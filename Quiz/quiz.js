//퀴즈 Array
var quizText = [
  {
    questionText: "다음 중 선형 구조가 아닌 것은?",
    answerText: ["스택", "큐", "데크", "트리"],
    answer: 4,
  },
  {
    questionText: "다음 중 LIFO의 특징을 가진 자료구조는?",
    answerText: ["스택", "큐", "데크", "트리"],
    answer: 1,
  },
];
var count = 0;

//rendering
window.onload = quizLoad();

//답안 클릭 시
function answerClick(clickValue) {
  if (quizText[count].answer === clickValue) {
    alert("정답입니다.");
    count++;
    var answer = document.querySelectorAll("#answer");
    answer[0].innerHTML = "";
    quizLoad();
  } else alert("틀렸습니다.");
}

//quiz load
function quizLoad() {
  //문제 불러오기
  var question = document.getElementById("questionText");
  var questText = document.createTextNode(quizText[count].questionText);
  question.appendChild(questText);

  //선택답안 불러오기
  var answer = document.querySelectorAll("#answer");
  for (let i = 0; i < answer.length; i++) {
    let answerText = document.createTextNode(quizText[count].answerText[i]);
    answer[i].appendChild(answerText);
  }
}
