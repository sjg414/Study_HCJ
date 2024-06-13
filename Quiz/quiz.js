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
var count = 1;

//rendering
window.onload = quizLoad();

//답안 클릭 시
function answerClick(clickValue) {
  if (quizText[count - 1].answer === clickValue) {
    alert("정답입니다.");
    ++count;
    quizLoad();
  } else alert("틀렸습니다.");
}

//quiz load
function quizLoad() {
  var question = document.getElementById("questionText");
  var answer = document.querySelectorAll("#answer");

  //문제가 끝났을 경우 종료
  if (count - 1 === quizText.length) {
    alert("문제가 끝났습니다.");
    return 0;
  }

  //새로운 문제 load 시 기존 문제 삭제
  if (count - 1 > 0) {
    question.textContent = "";
    for (let i = 0; i < answer.length; i++) answer[i].textContent = "";
  }

  //문제 불러오기
  var questText = document.createTextNode(
    count + "번 " + quizText[count - 1].questionText
  );
  question.appendChild(questText);

  //선택답안 불러오기
  for (let i = 0; i < answer.length; i++) {
    let answerText = document.createTextNode(quizText[count - 1].answerText[i]);
    answer[i].appendChild(answerText);
  }
}

//이전버튼 클릭 시
function preButton() {
  var question = document.getElementById("questionText");
  var answer = document.querySelectorAll("#answer");
  count -= 1;

  //첫번째 문제일 경우
  if (count < 1) {
    alert("1번 문제입니다.");
    count = 1;
    return 0;
  } else {
    //새로운 문제 load 시 기존 문제 삭제
    question.textContent = "";
    for (let i = 0; i < answer.length; i++) answer[i].textContent = "";

    //문제 불러오기
    var questText = document.createTextNode(
      count + "번 " + quizText[count - 1].questionText
    );
    question.appendChild(questText);

    //선택답안 불러오기
    for (let i = 0; i < answer.length; i++) {
      let answerText = document.createTextNode(
        quizText[count - 1].answerText[i]
      );
      answer[i].appendChild(answerText);
    }
  }
}

//다음버튼 클릭 시
function nextButton() {
  var question = document.getElementById("questionText");
  var answer = document.querySelectorAll("#answer");
  count += 1;

  //마지막 문제일 경우
  if (count - 1 === quizText.length) {
    alert("문제가 끝났습니다.");
    count = quizText.length;
    return 0;
  } else {
    //새로운 문제 load 시 기존 문제 삭제
    question.textContent = "";
    for (let i = 0; i < answer.length; i++) answer[i].textContent = "";

    //문제 불러오기
    var questText = document.createTextNode(
      count + "번 " + quizText[count - 1].questionText
    );
    question.appendChild(questText);

    //선택답안 불러오기
    for (let i = 0; i < answer.length; i++) {
      let answerText = document.createTextNode(
        quizText[count - 1].answerText[i]
      );
      answer[i].appendChild(answerText);
    }
  }
}
