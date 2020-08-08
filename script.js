// arrays of questions for Quiz App
const question = [{
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
    correctAnswer: 'strong'
},

{
    title: 'What tag is required in all HTML documents, and is used to define the title?',
    answers: {
        a: 'head',
        b: 'title',
        c: 'br',
        d: 'body',
    },
    correctAnswer: 'title'
},

{
    title: 'What tag is used to define a standard cell inside a table?',
    answers: {
        a: 'hr',
        b: 'h1',
        c: 'td',
        d: 'footer',
    },
    correctAnswer: 'td'
},

{
    title: 'In JavaScript, what element is used to store and manipulate text, usually in multiples?',
    answers: {
        a: 'Arrays',
        b: 'Strings',
        c: 'Variables',
        d: 'Recorder',
    },
    correctAnswer: 'Strings'
}
];

//start the game with a zero score & questionIndex
let score = 0;
let questionIndex = 0;
let nextQuestion;
let numCorrect = 0;

// Variables
const currentTime = document.querySelector('.currentTime');
const startbutton = document.querySelector('.startTime');
const questions = document.querySelector('.questions');
const container = document.querySelector('.container');

// 50 seconds per attempt for the quiz
let secondsLeft = 50;
// Time Interval is set to zero
let timeOut = 0;
// Incorrect answer take 10 seconds of the running clock as a penalty
let penalty = 10;
// Creates new element
const options = document.createElement('options');

// starts the quiz and trigger the timer countdown
startbutton.addEventListener('click', () => {
    render(questionIndex);
    if (secondsLeft) {
        timeOut = setInterval(() => {
            secondsLeft--;
            currentTime.textContent = `Time: ${secondsLeft}`;
            if (questionIndex >= question.length) {
                clearInterval(timeOut);
                currentTime.textContent = 'End Quiz!';
                endQuiz();
            }
            if (secondsLeft === 0) {
                clearInterval(timeOut);
                currentTime.textContent = 'You ran out of time!';
            }
        }, 1000);
    }
});

// Render the questions of the quiz to the page 
function render(questionIndex) {
    // Clears the page to render the questions 
    questions.innerHTML = '';
    options.innerHTML = '';
    // loops through all of the info in the array
    for (var i = 0; i < question.length; i++) {

        var userQuestion = question[questionIndex].title;
        var userChoices = question[questionIndex].answers;
        questions.textContent = userQuestion;
    }
    for (var [key, value] of Object.entries(userChoices)) {
        var listItem = document.createElement('li');
        listItem.textContent = value;
        questions.appendChild(options);
        options.appendChild(listItem);
        listItem.addEventListener('click', checkAnswer)
    }
}
//worked with TA to move the quiz to the next question upon userInput
function checkAnswer(event) {
    var userValue = event.target.textContent;
    if (userValue === question[questionIndex].correctAnswer) {
        questionIndex++;
        numCorrect++;
        render(questionIndex);
    } else {
        secondsLeft = secondsLeft - penalty;
        questionIndex++;
        render(questionIndex);
    }
    score += secondsLeft
}

function endQuiz() {
    questions.innerHTML = '';
    currentTime.innerHTML = '';

    // Heading:
    var generateH1 = document.createElement('h1');
    generateH1.setAttribute('class', 'generateH1');
    generateH1.textContent = 'End Qiuz!'

    questions.appendChild(generateH1);

    // Paragraph
    var generateP = document.createElement('p');
    generateP.setAttribute('class', 'generateP');

    questions.appendChild(generateP);

    // Calculates time remaining and replaces it with score
    if (score += secondsLeft) {

        var generateP2 = document.createElement('p');
        generateP.textContent = 'Your Score: ' + score;

        questions.appendChild(generateP2);

    }
    var generateP = document.createElement('p');
    generateP.setAttribute('class', 'generateP');

    questions.appendChild(generateP);

    if (score += secondsLeft) {
        var generateP3 = document.createElement('p');
        generateP.textContent = `${numCorrect} out of ${question.length}`;

        questions.appendChild(generateP);


    }
    // Label for initials input
    var generateLabel = document.createElement("label");
    generateLabel.setAttribute('class', 'generateLabel');
    generateLabel.textContent = 'Users Initials: ';

    questions.appendChild(generateLabel);

    // Input
    var generateInput = document.createElement('input');
    generateInput.setAttribute('type', 'text');
    generateInput.setAttribute('class', 'initials');
    generateInput.textContent = '';

    questions.appendChild(generateInput);

    // Submit
    var generateSubmit = document.createElement('button');
    generateSubmit.setAttribute('type', 'class', 'submit');
    generateSubmit.textContent = 'Save';

    questions.appendChild(generateSubmit);

    generateSubmit.addEventListener('click', function () {
        var initials = generateInput.value;

        if (initials === '') {
            alert('Please Enter Initials');
        } else {
            var totalScore = {
                initials: initials,
                score: score
            }
            var highScores = JSON.parse(localStorage.getItem('highScores'));
            if (highScores === null) {
                highScores = [];
            }
            highScores.push(totalScore);
            var newScore = JSON.stringify(highScores);
            localStorage.setItem('highScores', newScore);
        }
        var generateBtn = document.createElement('button');
        generateBtn.setAttribute('class', 'retry');
        generateBtn.textContent = 'Retry';

        questions.appendChild(generateBtn);

        generateBtn.addEventListener('click', function () {
            questionIndex = 0;
            secondsLeft = 50;
            score = 0;
            numCorrect = 0;
            render(questionIndex);
            if (secondsLeft) {
                timeOut = setInterval(function () {
                    secondsLeft--;
                    currentTime.textContent = `Time: ${secondsLeft}`;
                    if (questionIndex >= question.length) {
                        clearInterval(timeOut);
                        currentTime.textContent = 'End Quiz!';
                        endQuiz();
                    }
                    if (secondsLeft === 0) {
                        clearInterval(timeOut);
                        currentTime.textContent = 'You ran out of time!';
                    }
                }, 1000);
            }
        })
    });
};