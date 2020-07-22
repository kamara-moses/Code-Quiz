# Homework-Week4
Code Quiz

Basic Info On The App:
This app was created to function as a quiz. 
It ask the user five question that have multiple choice answers.
Once the user answers a question it moves to the next question.
Once all five questions are answered, the page will info the user they have reach the end of the quiz.
The end of the quiz will present the user with a score total and option to put their initials and save the score to the local storage.

HTML File:
Has the landing page set up.
Has the title of the page.
Has the name of the app.
Used a container div that holds all the particulars of the quiz.
This is where the quiz will be rendered for the user to see.

CSS File:
After formatting my index.html file, I added some CSS to style landing page.
kept the body color as white and added some color to the text
Buttons were styled accordingling to match the flow of the page.
All rendered content were styled as well to maintain continuity.

Scripts File:
Created my script.js file to give the app it functionality.
The start button received a function of click to activate the quiz.
Once the start button is clicked, the user is presented with the questions in the questionIndex.
If the user chooses the right answer the quiz moves to the next answer with question++.
if the user chooses the wrong answer the quiz deducted 10 seconds of the clock and move to the next question with question++.
After presenting all the questions and receiving the users inputs the quiz ends and displays the score.
The score is a combination of the amount of correct answer plus the time remaining on the clock.
used the numCorrect++ to store the number of questions the user got right.
the user will also be presented with how many questions they got right out of the total questionIndex.
The user have an option to save the score with initials to the localstorage.
