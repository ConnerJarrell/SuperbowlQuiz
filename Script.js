
// Applying a theme to the survey
Survey
    .StylesManager
    .applyTheme("winter");

// Defining the survey format

var finalScore = document.getElementById('finalScore')

var json = {
    title: "SuperBowl Quiz",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 15,
    maxTimeToFinish: 45,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {   
            // Start Page 
            questions: [
                {
                    type: "html",
                    html: "You are about to start quiz. <br/>You have 15 seconds for every page and 45 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            // Laying out the question
            questions: [
                {
                    type: "radiogroup",
                    name: "Championship",
                    title: "Who won the first SuperBowl?",
                    choices: [
                        "Kansas City Chiefs", "Chicago Bears", "Green Bay Packers", "Detroit Lions"
                    ],
                    correctAnswer: "Green Bay Packers"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Touchdowns",
                    title: "Who has the most touchdowns thrown in NFL history?",
                    choicesOrder: "random",
                    choices: [
                        "Dan Marino", "Peyton Manning", "Drew Brees", "Tom Brady"
                    ],
                    correctAnswer: "Drew Brees"
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "Players",
                    title: "How many players are on a NFL roster?",
                    choicesOrder: "random",
                    choices: [
                        "52", "48", "38", "45"
                    ],
                    correctAnswer: "52"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"

};


window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});

