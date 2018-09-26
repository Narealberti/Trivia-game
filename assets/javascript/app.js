$(document).ready(function (event) {

    var q0 = { 
        question: "Which cut flower is the most popular for purchase ?",
        answerChoices: ["A. Sunflower", "B. Lily", "C. Tulip", "D. Rose"],
        answer: "D.",

    }

    var q1 = { 
        question: "Which flower has the smallest seeds ?",
        answerChoices: ["A. Orchid", "B. Tulip", "C. Daffodil", "D. Sweet Pea"],
        answer: "A.",

    }

    var q2 = { 
        question: "Which flower symbolically means 'beauty' ?",
        answerChoices: ["A. Calla Lily", "B. Honesysuckle", "C. Gardenia", "D. Rose"],
        answer: "A.",

    }


    var q3 = { 
        question: "What color rose would you send to someone to say,'I am innocent and pure' ?",
        answerChoices: ["A. Pink", "B. Red", "C. White", "D. Yellow"],
        answer: "C.",

    }

    var q4 = { 
        question: "Which is the biggest flower of the world ?",
        answerChoices: ["A. Lily", "B. Rose", "C. Rafflasia", "D. Petunia"],
        answer: "C.",

    }


    var timeLeft = 10; 

    var losses = 0; 

    var wins = 0; 

    var timesUp = 0; 

    var number = 0; 

    var questions = [q0.question, q1.question, q2.question, q3.question, q4.question]; 
        console.log(questions); 

    var answerOptions = [q0.answerChoices, q1.answerChoices, q2.answerChoices, q3.answerChoices, q4.answerChoices]; 

    var answers = [q0.answer, q1.answer, q2.answer, q3.answer, q4.answer]


    
    function winPage () {
        $(".gif-screen").html("<img src=assets/images/win.gif class='winGif'>") 
    }

    function losePage () {
        $(".gif-screen").html("<img src=assets/images/lose.gif class='loseGif'>")
    }

    function endPage () {
        $(".gif-screen").html("<img src=assets/images/end.gif class='endGif'>")
    }

    var replaceOptions = "<div class='row'>" + 
                            "<p>Answer Choices</p>" + 
                        "</div>" +
                        "<div class='row choice1'></div>" +
                        "<div class='row choice2'></div>" + 
                        "<div class='row choice3'></div>" +
                        "<div class='row choice4'></div>"

    function countdown () { 
        if (timeLeft === 0) {
            clearInterval(intervalId); 
            $(".timer").text("Time Remaining: " + 0 + " Seconds"); 
            $(".results").text("Times Up! The correct answer is: " + answers[number]); 
            losePage(); 
            timesUp ++; 
            number ++ ;
            setTimeout(game, 3000); 
        }
        else {
            timeLeft -- ;
            $(".timer").text("Time Remaining: " + timeLeft + " Seconds");  
           
        } 
    }


    function game () {
        if (number < questions.length ) {
            timeLeft = 10; 
            $(".results").text(""); 
            $(".gif-screen").html(replaceOptions); 
            $(".timer").text("Time Remaining: " + timeLeft + " Seconds");
            intervalId = setInterval (countdown, 1000);
           
            $(".question").text(questions[number]); 
            $(".choice1").html("<button class='buttons button1' value=" + answerOptions[number][0] + ">" + answerOptions[number][0] + "</button>");
            $(".choice2").html("<button class='buttons button2' value=" + answerOptions[number][1] + ">" + answerOptions[number][1] + "</button>"); 
            $(".choice3").html("<button class='buttons button3' value=" + answerOptions[number][2] + ">" + answerOptions[number][2] + "</button>");
            $(".choice4").html("<button class='buttons button4' value=" + answerOptions[number][3] + ">" + answerOptions[number][3] + "</button>");
            
            $(".buttons").on("click", function () {
                    var userClick = $(this).attr("value"); 
                    console.log(userClick); 

                if (userClick === answers[number]) {
                    $(".results").text("You're Right! The correct answer is: " + answers[number]); 
                    wins ++; 
                    clearInterval(intervalId); 
                    winPage(); 
                    number ++ ;
                    setTimeout(game, 3000);

                }
                else{
                    $(".results").text("You're Wrong! The correct answer is: " + answers[number]);
                    losses ++; 
                    clearInterval(intervalId); 
                    losePage(); 
                    number ++ ;
                    setTimeout(game, 3000); 

                }   
            }); 

        
        }
        else {
            clearInterval(intervalId); 
            endPage(); 
            $(".results").text("All done ,heres how you did ! Press Restart to Play Again !"); 
            $(".question").text("");
            $(".unanswered").text("Unanswered: " + timesUp);
            $(".correct").text("Correct: " + wins); 
            $(".incorrect").text("Incorrect: " + losses); 
            
            $(".restart").show(); 

    }
}

function reset () {
    $(".restart").hide(); 
    losses = 0; 
    $(".incorrect").text(""); 
    wins = 0; 
    $(".correct").text(""); 
    timesUp = 0; 
    $(".unanswered").text("");
    number = 0; 
    game(); 
}

$(".restart").hide(); 

$(".start").on("click", function () {



    $(this).hide(); 

    game(); 
    
}); 

$(".restart").on("click", function () {
    reset(); 
}); 

}); 
