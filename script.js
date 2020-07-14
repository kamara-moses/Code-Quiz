// arrays of questions for Code Quiz App
var questions = [
    {
        title: 'What tag is used to define a list item (in a bulleted list)?',
        answers: ['li','u','ul','ol'],
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

//start the game with a zero score
var score = 0;

//
var questionIndex = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector('.currentTime');
var startbutton = document.querySelector('.startTime');
var questions = document.querySelector('.questions');
var container = document.querySelector('.container');

// Seconds left is 15 seconds per question:
var secondsLeft = 50;
// Holds interval time
var timeInterval = 0;
// Holds penalty time
var penalty = 10;
// Creates new element
var choice = document.createElement('ul');

// Triggers timer on button, shows user a display on the screen
startbutton.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = `Time: ${secondsLeft}`;

            if (secondsLeft <= 0) {
                clearInterval(timeInterval);
                currentTime.textContent = 'Time up!';
            }
        }, 1000);
    }
    renderquestions();
});


// Renders questions and choices to page: 
function renderquestions() {
    // Clears existing data 
    questions.innerHTML = "";
    choice.innerHTML = "";
    // loop through all info in array
    for (var i = 0; i < questions.length; i++) {
    
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questions.textContent = userQuestion;
    }
}
    // Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questions.appendChild(createDiv);

}