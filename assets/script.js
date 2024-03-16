var startBtn = document.getElementById('startButton');
      var resetButton = document.querySelector('.reset-btn');
      var quizSection = document.querySelector('.quiz-section');
      
      var optionElement = document.getElementById('options');
      var timerElement = document.getElementById('timer');
      var firstContainer = document.getElementById('start-quiz');

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

      function startQuiz(){
        displayQuestion()
        startBtn.classList.add('hide')
      }


      // function startQuiz() {
      // var startNow = document.getElementById("start-screen");
      //   startBtn.setAttribute("class","hide");
      //   quizSection.removeAttribute("class");
      //   //startBtn.classList.add('hide');
      //   //setTimer();
      //   displayQuestion();
      // }

      function displayQuestion() {
        firstContainer.innerHTML = ''; // Clear the contents of firstContainer
        var title = document.createElement('h2');
        title.textContent = quizChall[index].prompt;
        var quizContainer = document.getElementById('quiz-section');
    
        for (var i = 0; i < quizChall[index].options.length; i++) {
            var button = document.createElement('button');
            button.textContent = quizChall[index].options[i];
    
            button.addEventListener('click', function(event) {
                var selectedOption = event.target.textContent;
                checkAnswer(selectedOption);
            });
    
            quizContainer.appendChild(button); // Append each button to quizContainer
        }
    
        firstContainer.appendChild(title);
    
        var feedbackMessage = document.createElement('p');
        feedbackMessage.id = 'feedback-message';
        firstContainer.appendChild(feedbackMessage);
    }
    
    function checkAnswer(selectedOption) {
        var correctAnswer = quizChall[index].correct;
        var feedbackMessage = document.getElementById('feedback-message');
    
        if (selectedOption === correctAnswer) {
            feedbackMessage.textContent = 'Correct!';
        } else {
            feedbackMessage.textContent = 'Incorrect!';
        }
    
        // Move to the next question
        index++;
        // Check if there are more questions, if yes, display the next question
        if (index < quizChall.length) {
            displayQuestion();
        } else {
            // Quiz is over, display "ALL DONE"
            var allDoneMessage = document.createElement('p');
            allDoneMessage.textContent = 'ALL DONE';
            firstContainer.appendChild(allDoneMessage);
        }
    }
    
    function buttonClick() {
        index++;
        displayQuestion();
    }

      // function displayQuestion() {
      //   var currentQuestion = quizChall[index];
      //   questionElement.textContent = currentQuestion.prompt;
      //   optionElement.innerHTML = '';
      //   currentQuestion.options.forEach(function (choice) {
      //     var button = document.createElement('button');
      //     button.textContent = choice;
      //     button.addEventListener('click', function () {
      //       checkAnswer(choice === currentQuestion.correct);
      //     });
      //     optionElement.appendChild(button);
      //   });
      // }

      // function checkAnswer(isCorrect) {
      //   if (isCorrect) {
      //     score++;
      //   } else {
      //     time -= 10; // Deduct 10 seconds if answer is incorrect
      //     if (time < 0) time = 0; // Ensure time doesn't go below 0
      //   }
      //   index++;
      //   if (index < quizChall.length) {
      //     displayQuestion();
      //   } else {
      //     endQuiz();
      //   }
      // }

      // function setTimer() {
      //   timerInterval = setInterval(function () {
      //     timerElement.textContent = `${time}s`;
      //     if (time === 0) {
      //       clearInterval(timerInterval);
      //       endQuiz();
      //     } else {
      //       time--;
      //     }
      //   }, 1000); // Update every second
      // }

      // function endQuiz() {
      //   // Display end of quiz message
      //   clearInterval(timerInterval);
      //   questionElement.textContent = "All Done!";
      //   optionElement.innerHTML = `<p>Your Final score is: ${score}</p><p>Enter initials to save your score</p>`;
      // }

      // function resetQuiz() {
      //   clearInterval(timerInterval);
      //   score = 0;
      //   time = 50;
      //   index = 0;
      //   startBtn.classList.remove('hide');
      //   questionElement.textContent = "";
      //   optionsElement.innerHTML = "";
      //   timerElement.textContent = "50s";
      // }

      startBtn.addEventListener('click', startQuiz);
      //resetButton.addEventListener('click', resetQuiz);