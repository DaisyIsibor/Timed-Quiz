document.addEventListener('DOMContentLoaded', function() {
    var startBtn = document.getElementById('start-Btn');
    var quizSection = document.getElementById('quiz-section');
    var optionElement = document.getElementById('options');
    var timerElement = document.getElementById('timer');
    var submitButton = document.getElementById('submit');
    var clearButton = document.getElementById('clearHighScores');
    var resetButton = document.getElementById('resetButton');
    var highscoresList = document.getElementById('highscores');

    
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

    function startQuiz() {
        document.getElementById('start-screen').style.display = "none";
        quizSection.style.display = 'block';
        timerInterval = setInterval(function() {
            if (time <= 0) {
                clearInterval(timerInterval);
                endQuiz();
            } else {
                timerElement.textContent = time;
                time--;
            }
        }, 1000);
        displayQuestion();
    }

    function displayQuestion() {
        var currentQuestion = quizChall[index];
        var questionElement = document.getElementById('question');
        questionElement.textContent = currentQuestion.prompt;
        optionElement.innerHTML = '';
        currentQuestion.options.forEach(function (choice) {
            var button = document.createElement('button');
            button.textContent = choice;
            button.addEventListener('click', function () {
                checkAnswer(choice === currentQuestion.correct);
            });
            optionElement.appendChild(button);
        });
    }

    function checkAnswer(userAns) {
        var isCorrect = userAns === true;
    
        if (isCorrect) {
            showFeedback("Correct!");
            score++;
        } else {
            time -= 5; // Deduct 5 seconds for incorrect answer
            showFeedback("Incorrect!");
        }
    
        hideFeedback();
        index++;
        if (index < quizChall.length) {
            displayQuestion(); // Move to the next question
        } else {
            endQuiz(); // Call endQuiz() function if it's the last question
        }
    }
    
    function endQuiz() {
        clearInterval(timerInterval);
        quizSection.style.display = "none";
        var finalScore = document.getElementById("final-score");
        finalScore.textContent = "Your Score: " + score; // Display the final score
        document.getElementById("results").classList.remove('hide');
        document.getElementById("initials").classList.remove('hide'); // Display the input for initials
        submitButton.classList.remove('hide'); // Display the submit button
        displayHighscores(); // Display the high scores
    }
    
    

    function showFeedback(message) {
        var feedbackContainer = document.getElementById('feedback-container');
        var feedbackMessage = document.createElement('p');
        feedbackMessage.textContent = message;
        feedbackContainer.appendChild(feedbackMessage);
    }

    function hideFeedback() {
        var feedbackContainer = document.getElementById('feedback-container');
        feedbackContainer.innerHTML = ''; // Clear any existing feedback messages
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

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        var initialsInput = document.getElementById('initials');
        var initials = initialsInput.value.trim();
        if (initials !== "") {
            saveScore(initials, score);
            endQuiz();
        } else {
            alert("Please enter your initials.");
        }
    });

    clearButton.addEventListener('click', function() {
        localStorage.removeItem("highscores");
        displayHighscores(); // Update high scores list
    });

    startBtn.addEventListener('click', startQuiz);

    resetButton.addEventListener('click', function() {
        clearInterval(timerInterval);
        score = 0;
        time = 50;
        index = 0;
        document.getElementById('start-screen').style.display = 'block';
        document.getElementById('highscores-section').classList.add('hide');
    });
});