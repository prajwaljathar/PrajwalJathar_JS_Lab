//we will use Question to create objects of Question
function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}
//Array of Question object
var questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
  ];
//we will be creating object of Quiz
function Quiz(questions){
    this.score=0;
    this.questions=questions;
    this.index=0;
}

//returns true if all questions of the quiz are covered
Quiz.prototype.isQuizOver=function(){
    
    return this.index===this.questions.length;
}

//prints the final score of the participant 
Quiz.prototype.printScore=function(){
    var percent=(this.score/this.questions.length)*100
        document.getElementById("quiz").innerHTML=`<h1> Marks scored : ${this.score} </h1><h2>Score Percentage = ${percent}%</h2>`
}

//loads the next questions
function loadNextQuestion(){
    if(quiz.isQuizOver()){
        
        quiz.printScore();
    }
    else{
        
        document.getElementById("question").innerText=quiz.questions[quiz.index].text;
        for(var x=0;x<quiz.questions[quiz.index].choices.length;x++){
            var choice="choice"+x
            var choice1=quiz.questions[quiz.index].choices[x]
            document.getElementById(choice).innerText=choice1
            checkAnswerOnClick("btn"+x,choice1)
            progress=quiz.index+1
            document.getElementById("progress").innerText=`Question ${progress} of ${quiz.questions.length}`
        }
    }
}


//once any option is marked
function checkAnswerOnClick(button,choice){
    document.getElementById(button).onclick=()=>{

        if(quiz.questions[quiz.index].answer===choice){
            quiz.score++;
        }
        quiz.index++
        loadNextQuestion();
        

    }
}

var quiz=new Quiz(questions)
loadNextQuestion();
