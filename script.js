// arrays of questions for Quiz App
var question = [
    {
        title: 'What tag is used to define a list item (in a bulleted list)?',
        answers: {
            a: 'li',
            b: 'u',
            c: 'ul',
            d: 'ol',
        },
        correctAnswer: 'li'
    },

    {
        title: 'What tag is used to render or transform text into an important (bold) version?',
        answers: {
            a: 'a',
            b: 'em',
            c: 'bold',
            d: 'strong',
        },
        correctAnswer: 'd'
    },

    {
        title: 'What tag is required in all HTML documents, and is used to define the title?',
        answers: {
            a: 'title',
            b: 'head',
            c: 'br',
            d: 'body',
        },
        correctAnswer: 'a'
    },

    {
        title: 'What tag is used to define a standard cell inside a table?',
        answers: {
            a: 'hr',
            b: 'h1',
            c: 'footer',
            d: 'td',
        },
        correctAnswer: 'd'
    },

    {
        title: 'In JavaScript, what element is used to store and manipulate text, usually in multiples?',
        answers: {
            a: 'Arrays',
            b: 'Strings',
            c: 'Variables',
            d: 'Recorder',
        },
        correctAnswer: 'b'
    }
];

//start the game with a zero score & questionIndex
var score = 0;
var questionIndex = 'questions';

// Variables
var currentTime = document.querySelector('.currentTime');
var startbutton = document.querySelector('.startTime');
var questions = document.querySelector('.questions');
var container = document.querySelector('.container');

// 50 seconds per attempt for the quiz
var secondsLeft = 50;
// Time Interval is set to zero
var timeInterval = 0;
// Incorrect answer take 10 seconds of the running clock as a penalty
var penalty = 10;
// Creates new element
var choices = document.createElement('choice');

// starts the quiz and trigger the timer countdown
startbutton.addEventListener("click", function () {
    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = `Time: ${secondsLeft}`;

            if (secondsLeft <= 0) {
                clearInterval(timeInterval);
                currentTime.textContent = 'You ran out of time!';
            }
        }, 1000);
    }
    renderquestionIndex(questions);
});


// Render the questions of the quiz to the page 
function renderquestionIndex(questions) {
    // Clears existing data 
    questions.innerHTML = '';
    choices.innerHTML = '';
    // loop through all of the info in the array
    for (var i = 0; i < questions.length; i++) {
    
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questions.textContent = userQuestion;
    }
}
 
