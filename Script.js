var quizContainer = document.getElementById('quiz');
var resutsContiner = document.getElementById('results');
var submitButton = document.getElementById('submit');
var myQuestions = [
    {
      question: "Who won the first SuperBowl?",
      answers: {
        a: "Kansas City Chiefs",
        b: "Chicago Bears",
        c: "Green Bay Packers"
      },
      correctAnswer: "c"
    },
    {
      question: "Who has the most touchdowns thrown in NFL history?",
      answers: {
        a: "",
        b: "",
        c: ""
      },
      correctAnswer: ""
    },
    {
      question: "How many players are on a NFL roster?",
      answers: {
        a: "",
        b: "j",
        c: "",
        d: ""
      },
      correctAnswer: "d"
    }
];

function buildQuiz(){
    var output = [];

    myQuestions.forEach
}

function showResults(){}

buildQuiz();

submitButton.addEventListener('click' , showResults);

