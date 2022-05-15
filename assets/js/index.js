
// declare the variables

function submitResults(){
    var totalQuiz = 5;
    var initialScore = 0;

    // Getting data from the game player (User)

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

   
    // Validation of submission data

    for(i = 1; i <= totalQuiz;i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert('You have not made an answer selection in question '+ i);
            return false; 
        }
    }

    // Setting of the correct answers

    var answers =["d", "b", "a", "c", "c"];


    // Check Answers

    for(i = 1; i <= totalQuiz;i++){
        if(eval('q'+i) == answers[i - 1]){
        
            initialScore++;
        }
    }  
        alert("You have scored "+initialScore+ ' out of ' +totalQuiz);

}



