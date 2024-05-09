// var startBtn = document.getElementById('start-Btn');
// var resetButton = document.querySelector('.reset-btn');
// var optionElement = document.getElementById('options');
// var timerElement = document.getElementById('timer');
// var firstContainer = document.getElementById('quiz-section');

// var index = 0;
// var score = 0;
// var time = 60;
// var timerInterval;

// var quizChall = [
//     {
//         prompt: `What are the two main types of HTML coding?`,
//         options: ["Structural Coding and Semantic Coding", "HyperText Markup Language", "div tag and section tag", "None of the above"],
//         correct: "Structural Coding and Semantic Coding",
//     },
//     {
//         prompt: `How do we assign a style in CSS to an ID attribute?`,
//         options: ["We use (.) and the ID attribute", "We use (*) and the ID attribute ", "We use (#) and the ID attribute", "None of the above"],
//         correct: "We use (#) and the ID attribute"
//     },
//     {
//         prompt: `What is an Array?`,
//         options: ["An Array is a test environment used by developers to check out their code", "An Array is a single variable that is used to hold a group of data", "An Array is a predictable pattern of indices to perform a task on all the items in an array by allowing a single code block to be executed over and over", "All of the above"],
//         correct: "An Array is a single variable that is used to hold a group of data"
//     },
//     {
//         prompt: `What element in JavaScript listens to click event?`,
//         options: ["Function()", "console.log", "var= click", "addEventListener"],
//         correct: "addEventListener"
//     },
//     {
//         prompt: `Where in the HTML does the CSS tag go?`,
//         options: ["In the footer tag", "In the body tag", "A CSS tag is not needed in HTML", "In the head tag before the body tag"],
//         correct: "In the head tag before the body tag"
//     },
//     {
//         prompt: `Choose which elements below are used in JavaScript`,
//         options: ["Sections, Div, Aside and header", "Background-color, media query, and margin", "Function, array, variable and addEventListener", "All of the above"],
//         correct: "Function, array, variable and addEventListener"
//     }
// ];

// // function timer(){
// //     timerInterval = setInterval(function(){
// //         if(time <= -1){
// //             clearInterval(timerInterval);
// //             document.getElementById("quiz-section").style.display = "none";
// //             document.getElementById("results").style.display = "block";
// //         }
// //         else{
// //             document.getElementById("timer").textContent = time;
// //             time--;
// //         }
// //     }, 1000)
// // }
// // function startQuiz() {
// //     displayQuestion();
// //     timer();
// //     startBtn.classList.add('hide');
// // }

// // // Timer function
// // function timer() {
// //     timerInterval = setInterval(function() {
// //         if (time <= 0) {
// //             clearInterval(timerInterval);
// //             endQuiz();
// //         } else {
// //             document.getElementById("timer").textContent = time;
// //             time--;
// //         }
// //     }, 1000);
// // }

// function startQuiz(){
//     document.getElementById('start-btn').style.display="'none";
//     document.getElementById('quiz-section').style.display='block';
//     timerInterval = setInterval(function(){
//         timeLeft--;

//         //update timer display
//         if(timeLeft <=0){
//             clearInterval(timerInterval);
//             endQuiz();
//         }
//     },1000);
//     displayQuestion();
// }

// // Function to end the quiz
// function endQuiz() {
//     clearInterval(timerInterval);
//     document.getElementById("quiz-section").style.display = "none";
//     document.getElementById("results").style.display = "block";
// }

// // Function to handle quiz completion
// function handleQuizCompletion() {
//     endQuiz();
//     // Show the input for initials and score saving
//     document.getElementById("results").classList.remove('hide');
// }


// // function startQuiz() {
// //     displayQuestion();
// //     timer();
// //     startBtn.classList.add('hide');
// // }

// function displayQuestion() {
//     document.getElementById("start-quiz").style.display = "none";
//     document.getElementById("quiz-section").innerHTML = "";

//     var title = document.createElement('h2');
//     title.textContent = quizChall[index].prompt;

//     var buttonContainer = document.createElement('div');

//     for (var i = 0; i < quizChall[index].options.length; i++) {
//         var button = document.createElement('button');
//         button.textContent = quizChall[index].options[i];

//         button.addEventListener('click', buttonClick);
//         button.setAttribute("data-answer",quizChall[index].options[i]);

//         buttonContainer.append(button);
//     }

//     firstContainer.append(title, buttonContainer);
// }

// function buttonClick(event) {
//   event.preventDefault();
//   let userAns = this.getAttribute("data-answer");
//   if(userAns === quizChall[index].correct){
//     alert("Corect Answer");
//     score = score + 10;
//     index++;
//     if(index === quizChall.length){
//         clearInterval(timerInterval);
//         document.getElementById("quiz-section").style.display = "none";
//         document.getElementById("results").style.display = "block";
//         return;
//     }
//     displayQuestion();
//   }
//   else{
//     alert("Wrong Answer");
//     time = time - 5;
//     index++;
//     if(index === quizChall.length){
//         clearInterval(timerInterval);
//         document.getElementById("quiz-section").style.display = "none";
//         document.getElementById("results").style.display = "block";
//         return;
//     }
//     displayQuestion();
//   }
// }
// function resetQuiz() {
//     clearInterval(timerInterval);
//     score = 0;
//     time = 50;
//     index = 0;
//     startBtn.classList.remove('hide');
//     questionElement.textContent = "";
//     optionsElement.innerHTML = "";
//     timerElement.textContent = "50s"
// }
// // Adding event listener for start button
// startBtn.addEventListener('click', startQuiz);
//  resetButton.addEventListener('click', resetQuiz);

// script.js
document.addEventListener('DOMContentLoaded', function() {
var startBtn = document.getElementById('start-Btn');
// var resetButton = document.getElementById('resetButton');
var firstContainer = document.getElementById('quiz-section');
var optionElement = document.getElementById('options');
var timerElement = document.getElementById('timer');
var feedbackElement = document.getElementById('feedback-message');
var submitButton = document.getElementById('submit');

var index = 0;
var score = 0;
var time = 50;
var timerInterval;

var quizChall = [
    {
        prompt: `What are the two main types of HTML coding?`,
        options: ["Structural Coding and Semantic Coding", "HyperText Markup Language", "div tag and section tag", "None of the above"],
        correct: "Structural Coding and Semantic Coding",
    },
    {
        prompt: `How do we assign a style in CSS to an ID attribute?`,
        options: ["We use (.) and the ID attribute", "We use (*) and the ID attribute ", "We use (#) and the ID attribute", "None of the above"],
        correct: "We use (#) and the ID attribute"
    },
    {
        prompt: `What is an Array?`,
        options: ["An Array is a test environment used by developers to check out their code", "An Array is a single variable that is used to hold a group of data", "An Array is a predictable pattern of indices to perform a task on all the items in an array by allowing a single code block to be executed over and over", "All of the above"],
        correct: "An Array is a single variable that is used to hold a group of data"
    },
    {
        prompt: `What element in JavaScript listens to click event?`,
        options: ["Function()", "console.log", "var= click", "addEventListener"],
        correct: "addEventListener"
    },
    {
        prompt: `Where in the HTML does the CSS tag go?`,
        options: ["In the footer tag", "In the body tag", "A CSS tag is not needed in HTML", "In the head tag before the body tag"],
        correct: "In the head tag before the body tag"
    },
    {
        prompt: `Choose which elements below are used in JavaScript`,
        options: ["Sections, Div, Aside and header", "Background-color, media query, and margin", "Function, array, variable and addEventListener", "All of the above"],
        correct: "Function, array, variable and addEventListener"
    }
];

// function startQuiz() {
//     document.getElementById('start-quiz').style.display = "none";
//     document.getElementById('quiz-section').style.display = 'block';
//     timerInterval = setInterval(function() {
//         if (time <= 0) {
//             clearInterval(timerInterval);
//             endQuiz();
//         } else {
//             document.getElementById("timer").textContent = time;
//             time--;
//         }
//     }, 1000);
//     displayQuestion();
// }

// function endQuiz() {
//     clearInterval(timerInterval);
//     document.getElementById("quiz-section").style.display = "none";
//     document.getElementById("results").style.display = "block";
//     feedbackElement.textContent = "Your Score: " + score;
//     localStorage.setItem("score", score);
// }

// function handleQuizCompletion() {
//     endQuiz();
//     // Show the input for initials and score saving
//     document.getElementById("results").classList.remove('hide');
// }

// function displayQuestion() {
//     document.getElementById("start-quiz").style.display = "none";
//     document.getElementById("quiz-section").innerHTML = "";

//     var title = document.createElement('h2');
//     title.textContent = quizChall[index].prompt;

//     var buttonContainer = document.createElement('div');

//     for (var i = 0; i < quizChall[index].options.length; i++) {
//         var button = document.createElement('button');
//         button.textContent = quizChall[index].options[i];

//         button.addEventListener('click', buttonClick);
//         button.setAttribute("data-answer",quizChall[index].options[i]);

//         buttonContainer.append(button);
//     }

//     firstContainer.append(title, buttonContainer);
// }

// function buttonClick(event) {
//     event.preventDefault();
//     var userAns = this.getAttribute("data-answer");
//     if (userAns === quizChall[index].correct) {
//         this.classList.add('correct');
//         score = score + 10;
//         feedbackElement.textContent = "Correct!";
//     } else {
//         this.classList.add('incorrect');
//         time = time - 5;
//         feedbackElement.textContent = "Incorrect!";
//     }
//     index++;
//     if (index === quizChall.length || time <= 0) {
//         handleQuizCompletion();
//     } else {
//         displayQuestion();
//     }
// }

// function resetQuiz() {
//     clearInterval(timerInterval);
//     score = 0;
//     time = 60;
//     index = 0;
//     startBtn.classList.remove('hide');
//     document.getElementById("quiz-section").innerHTML = "";
//     document.getElementById("start-quiz").style.display = "block";
//     document.getElementById("results").style.display = "none";
//     document.getElementById("initials").value = "";
//     feedbackElement.textContent = "";
// }

// // Adding event listener for start button
// startBtn.addEventListener('click', startQuiz);
// resetButton.addEventListener('click', resetQuiz);
function startQuiz() {
    document.getElementById('start-quiz').style.display = "none";
    document.getElementById('quiz-section').style.display = 'block';
    timerInterval = setInterval(function() {
        if (time <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        } else {
            document.getElementById("timer").textContent = time;
            time--;
        }
    }, 1000);
    displayQuestion();
}

function displayQuestion() {
    document.getElementById("start-quiz").style.display = "none";
    document.getElementById("quiz-section").innerHTML = "";

    var title = document.createElement('h2');
    title.textContent = quizChall[index].prompt;

    var buttonContainer = document.createElement('div');

    for (var i = 0; i < quizChall[index].options.length; i++) {
        var button = document.createElement('button');
        button.textContent = quizChall[index].options[i];
        button.addEventListener('click', function(event) {
            event.preventDefault();
            checkAnswer(this.textContent); // Pass the selected answer to checkAnswer function
        });
        buttonContainer.append(button);
    }

    document.getElementById("quiz-section").appendChild(title);
    document.getElementById("quiz-section").appendChild(buttonContainer);
}
    //     button.addEventListener('click', buttonClick);
    //     button.setAttribute("data-answer",quizChall[index].options[i]);

    //     buttonContainer.append(button);
    // }

    // firstContainer.append(title, buttonContainer);
// }

// function buttonClick(event) {
//     event.preventDefault();
//     var userAns = this.getAttribute("data-answer");
//     if (userAns === quizChall[index].correct) {
//         this.classList.add('correct');
//         score = score + 10;
//         feedbackElement.textContent = "Correct!";
//     } else {
//         this.classList.add('incorrect');
//         time = time - 5;
//         feedbackElement.textContent = "Incorrect!";
//     }
//     index++;
//     if (index === quizChall.length || time <= 0) {
//         handleQuizCompletion();
//     } else {
//         displayQuestion();
//     }
// }

function checkAnswer(userAns) {
    var isCorrect = userAns === quizChall[index].correct;
    var feedbackMessage = document.getElementById('feedback-message');

    if (isCorrect) {
        feedbackMessage.textContent = "Correct!";
    } else {
        time -= 5; // Deduct 5 seconds for incorrect answer
        feedbackMessage.textContent = "Incorrect!";
    }

    // Display feedback message
    feedbackMessage.classList.remove('hide');

    // Hide feedback message after 1 second
    feedbackMessage.classList.add('hide');
        
    index++;
    if (index < quizChall.length) {
        displayQuestion(); // Move to the next question
    } else {
        endQuiz(); // Call endQuiz() function if it's the last question
    }
}


function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("results").style.display = "block";
    feedbackElement.textContent = "Your Score: " + score;
    localStorage.setItem("score", score);
}
function resetQuiz() {
    clearInterval(timerInterval);
    score = 0;
    time = 60;
    index = 0;
    startBtn.classList.remove('hide');
    document.getElementById("quiz-section").innerHTML = "";
    document.getElementById("start-quiz").style.display = "block";
    document.getElementById("results").style.display = "none";
    document.getElementById("initials").value = "";
    feedbackElement.textContent = "";
}
function saveScore(initials, score) {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.push({ initials: initials, score: score });
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

function displayHighscores() {
    highscoresList.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.forEach(function(entry) {
        var li = document.createElement("li");
        li.textContent = entry.initials + ": " + entry.score;
        highscoresList.appendChild(li);
    });
}

function handleQuizCompletion() {
    endQuiz();
    document.getElementById("results").classList.remove('hide');
}

// Move the following line outside of the event listener for submitButton
// Event listeners
startBtn.addEventListener('click', startQuiz);

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    var initialsInput = document.getElementById('initials'); // Define initialsInput variable
    var initials = initialsInput.value.trim();
    if (initials !== "") {
        saveScore(initials, score);
        displayHighscores();
    }
});
});