var startBtn = document.getElementById('start-Btn');
var resetButton = document.querySelector('.reset-btn');
var optionElement = document.getElementById('options');
var timerElement = document.getElementById('timer');
var firstContainer = document.getElementById('quiz-section');

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

// function timer(){
//     timerInterval = setInterval(function(){
//         if(time <= -1){
//             clearInterval(timerInterval);
//             document.getElementById("quiz-section").style.display = "none";
//             document.getElementById("results").style.display = "block";
//         }
//         else{
//             document.getElementById("timer").textContent = time;
//             time--;
//         }
//     }, 1000)
// }


// Timer function
function timer() {
    timerInterval = setInterval(function() {
        if (time <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        } else {
            document.getElementById("timer").textContent = time;
            time--;
        }
    }, 1000);
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("results").style.display = "block";
}

// Function to handle quiz completion
function handleQuizCompletion() {
    endQuiz();
    // Show the input for initials and score saving
    document.getElementById("results").classList.remove('hide');
}


function startQuiz() {
    displayQuestion();
    timer();
    startBtn.classList.add('hide');
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

        button.addEventListener('click', buttonClick);
        button.setAttribute("data-answer",quizChall[index].options[i]);

        buttonContainer.append(button);
    }

    firstContainer.append(title, buttonContainer);
}

function buttonClick(event) {
  event.preventDefault();
  let userAns = this.getAttribute("data-answer");
  if(userAns === quizChall[index].correct){
    alert("Corect Answer");
    score = score + 10;
    index++;
    if(index === quizChall.length){
        clearInterval(timerInterval);
        document.getElementById("quiz-section").style.display = "none";
        document.getElementById("results").style.display = "block";
        return;
    }
    displayQuestion();
  }
  else{
    alert("Wrong Answer");
    time = time - 5;
    index++;
    if(index === quizChall.length){
        clearInterval(timerInterval);
        document.getElementById("quiz-section").style.display = "none";
        document.getElementById("results").style.display = "block";
        return;
    }
    displayQuestion();
  }
}

