var timeLeft = document.querySelector(".time-left");
var quizContainer = document.getElementById("container");
var nextBtn = document.getElementById("next-button");
var displayContent = document.getElementById("display-content");
var scoreContainer = document.querySelector("score-container");
var restart = document.getElementById("restart");
var userScore = document.getElementById("user-score");
var startScreen = document.querySelector(".start-screen");
var startButton = document.getElementById("start-button");
var countOfQuestion = document.querySelector(".number-of-question");
var questionCount;
var scoreCount = 0;
var count = 10;
var countdown;

//5 questions with options and correct answer 
var quizArr = [
    {
    id: "0",
    
    question: "What are the two main type of HTML coding?",
options:[
    "Structural Coding and Semantic Coding",
    "HyperText Markup Language",
    "div tag and section tag",
    "None of the above",
 ],

 correct:"Structural Coding and Semantic Coding",
},

{
    id: "1",
    question:"How to we assign a style in CSS to an ID attribute?",
    options:[
    "We use (.) and the ID attribute",
    "We use (*) and the ID attribute ",
    "We use (#) and the ID attribute",
    "None of the above",
],
correct:"We use (#) and the ID attribute"
},

{   id: "2",
    question:"What is an Array?",
    options:[
        "An Array is test environment used by developers to check out their code",
        "An Array is a single variale that is used to hold a group of data",
        "An Array is a predictable pattern of indices to perform a task on all the items in an array by allowing a single code block to be executed over and over",
        "All of the above"
    ],
correct:"An Array is a single variale that is used to hold a group of data"

},
{
    id:"3",
    question:"what element In JavaScript listens to click event",
    options:[
        "Function()",
        "console.log",
        "var= click",
        "addEventlistener",
    ],
    correct: "addEventlistener"
},

{
    id:"3",
     questions:"where in the HTML does the CSS tag goes?",
     options:[
      "In the footer tag",
      "In the body tag",
      "A CSS tag is not needed in HTML",
      "in the head tag before the body tag ",

     ],
    correct:"in the head tag before the body tag "
},


{
    id:"4",
    questions:"Choose which element below are used in JavaScript",
    options:[
         "Sections, Div, Aside and header",
         "Background-color , media query , and margin",
         "Function , array, variable and addEventlistener",
         "All of the above",
    
    ],
    correct: "Function , array, variable and addEventlistener"
}
]

restart.addEventListener("click", () => {
   initial();
   displayContent.classList.remove("hide");
   scoreContainer.classlist.add("hide");
});


nextBtn.addEventListener("click", (displayNext = () =>{
    questionCount += 1;

    if( questionCount == quizArr.length){
      displayContent.classlist.add("hide");
      scoreContainer.classlist.remove("hide");
      userScore.innerHTML ="your Score is " + scoreCount + "out of" + questionCount;
    }
    else{
       countOfQuestion.innerHTML = questionCount + 1 + "of" + quizArr.length + "Question";

       quizDisplay(questionCount);
       count = 10;
       clearInterval(countdown);
       timerDisplay();

    }
})
);

const timerDisplay = () =>{
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = '$(count)s';
        if (count == 0) {
         clearInterval(countdown);
         displayNext();
        }
    }, 1000);
};

     var quizDisplay = (questionCount) => {
        let quizCards = document.querySelectorALL("container-mid");

        quizCards.forEach((card) => {
            card.classlist.add["hide"];
        })
        quizCards[questionCount].classlist.remove("hide");
    };
    
    
    function quizCreator(){
        quizArr.sort(() => Math.random() - 0.5);

        for(var i of quizArr){
            i.options.sort(() => Math.random () - 0.5);
        var div = document.createElement("div");
        div.classlist.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + "out-of" + quizArr.length + "Question";

        var question_DIV = document.createElement("p");
        question_DIV.classlist.add("question"); 
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);        

        div.innerHTML += `
        <button class="option-div" onclick= "checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick= "checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick= "checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick= "checker(this)">${i.options[3]}</button>
        <button class="option-div" onclick= "checker(this)">${i.options[4]}</button>
        `;
  

        quizContainer.appendChild(div);
        }
    }


    function checker(userOption){
        var userSolution = userOption.innerText;
        var question = document.getElementsByClassName
        ("container-mid");[questionCount];
        var options = question.querySelectorAll(".option-div");
        
        if(userSolution === quizArr[questionCount].correct){
            userOption.classlist.add("correct");
            scoreCount++;
        }
        else{
            userOption.classlist.add("incorrect");


            options.forEach((element) => {
                if (element.innerText == quizArr[questionCount].correct){
                    element.classlist.add["correct"];
                }
            });
                
        }
        clearInterval(countdown);
    options.forEach((element)=>{
        element.disabled = true;
    })
    }

function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count = 10;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

startButton.addEventListener("click",()=> {
    startScreen.classlist.add("hide");
    displayContent.classlist.remove("hide");
    initial();
});

window.onload = () => {
    startScreen.classlist.remove("hide");
    displayContent.classlist.add("hide");
};