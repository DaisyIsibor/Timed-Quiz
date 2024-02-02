var quizChall=[
{
    prompt: `What are the two main type of HTML coding?`,
    selection:[
        "Structural Coding and Semantic Coding",
        "HyperText Markup Language",
        "div tag and section tag",
        "None of the above",
     ],
    
     correct:"Structural Coding and Semantic Coding",
    
}
];

[
{
    
    prompt:`How to we assign a style in CSS to an ID attribute?`,
    selection:[
    "We use (.) and the ID attribute",
    "We use (*) and the ID attribute ",
    "We use (#) and the ID attribute",
    "None of the above",
],
correct:"We use (#) and the ID attribute"
}
];


[
{  prompt:`What is an Array?`,
    selection:[
        "An Array is test environment used by developers to check out their code",
        "An Array is a single variale that is used to hold a group of data",
        "An Array is a predictable pattern of indices to perform a task on all the items in an array by allowing a single code block to be executed over and over",
        "All of the above"
    ],
correct:"An Array is a single variale that is used to hold a group of data"

}
];

[
{ 
    prompt:`what element In JavaScript listens to click event`,
    selection:[
        "Function()",
        "console.log",
        "var= click",
        "addEventlistener",
    ],
    correct: "addEventlistener"
}
];

[
{
    prompt:`where in the HTML does the CSS tag goes?`,
     options:[
      "In the footer tag",
      "In the body tag",
      "A CSS tag is not needed in HTML",
      "in the head tag before the body tag ",

     ],
    correct:"in the head tag before the body tag "
}
];

[
{
   
    prompt:`Choose which element below are used in JavaScript`,
    options:[
         "Sections, Div, Aside and header",
         "Background-color , media query , and margin",
         "Function , array, variable and addEventlistener",
         "All of the above",
    
    ],
    correct: "Function , array, variable and addEventlistener"
}
];

var questionData=0,score=0,time=50, timerInterval;


//this is to set the timer
function setTimer() {
     timerInterval = setInterval(function() {
        document.getElementById('timer').textContent=`Time:$(time)s`;

       if(time === 0){
     // Stops execution of action at set interval
     clearInterval(timerInterval);
     showResults();
       }else{
        time--;
     }
    
    }, 10000);
}






function startQuiz(){
    window.location.href = "quiz.html";
}

