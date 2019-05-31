$(document).ready(function () {
  var user_choice_p = $(".user-choice p");
  var comp_choice_p = $(".comp-choice p");
  var results_p = $(".results p")
  var choices = $(".choice");
  var userScore_span = $("#user-score");
  var compScore_span = $("#comp-score");
  var user_label_div = $("#user");
  var comp_label_div = $("#comp");
  var reset_button = $(".reset")
  // var header_glow = $(".glow")

  // CHOICES 
  var options = ["rock", "paper", "scissors"]

  var userChoice;
  var compChoice;
  var userScore = 0;
  var compScore = 0;
  
  // Calculate average wins and loses 
  var total = userScore + compScore;
  var averageWins = Math.floor(userScore/total * 100) 


  // will grab all choice classes on click 
  // rock.on("click", function() {
  //   if (compChoice === "rock")
  //   alert("yes!")
  // }); 

  choices.on("click", function () {
    compChoice = options[Math.floor(Math.random() * options.length)];
    user_choice_p.text(`You picked ${convertToString(this.id)}.`)
    comp_choice_p.text(`The computer picked ${convertToString(compChoice)}.`);
    switch (this.id) {
      case "rock":
        compare("rock");
        break
      case "paper":
        compare("paper");
        break
      case "scissors":
        compare("scissors");
        break
    }; // end switch 
  }); // end function 


  function compare(choice) {
    switch (true) {
      case compChoice === "rock" && choice === "rock":
        results_p.text("You can't beat yourself!");
        tie();
        break;
      case compChoice === "scissors" && choice === "rock":
        results_p.text("Rock beats Paper! You win!");
        userScore++;
        userScore_span.text(userScore);
        win();
        break;
      case compChoice === "paper" && choice === "rock":
        results_p.text("Paper beats Rock! You lose!");
        compScore++;
        compScore_span.text(compScore);
        lose();
        break;
      case compChoice === "paper" && choice === "paper":
        results_p.text("Paper can't beat Paper. It's a tie!");
        tie();
        break;
      case compChoice === "rock" && choice === "paper":
        results_p.text("Paper covers Rock! You win!");
        userScore++;
        userScore_span.text(userScore);
        win();
        break;
      case compChoice === "scissors" && choice === "paper":
        results_p.text("Scissors cuts Paper! You lose!");
        compScore++;
        compScore_span.text(compScore);
        lose();
        break;
      case compChoice === "scissors" && choice === "scissors":
        results_p.text("Scissors can't beat Scissors! Tie!");
        tie();
        break;
      case compChoice === "paper" && choice === "scissors":
        results_p.text("Scissors cuts Paper! You win!");
        userScore++;
        userScore_span.text(userScore);
        win();
        break;
      case compChoice === "rock" && choice === "scissors":
        results_p.text("Rock crushes Scissors! You lose!");
        compScore++;
        compScore_span.text(compScore);
        lose();
        break;
    };
  };

  // add additional words and caps to userchoice
  function convertToString(word) {
    if (word == "rock") return "Rock";
    if (word == "paper") return "Paper";
    if (word == "scissors") return "Scissors";
  }

  // add colors to scoreboard divs on win, lose, or tie
  function win() {
    comp_label_div.addClass('lose-label');
    setTimeout(() => comp_label_div.removeClass('lose-label'), 1000);
    user_label_div.addClass('win-label');
    setTimeout(() => user_label_div.removeClass('win-label'), 1000);
  }

  function lose() {
    user_label_div.addClass('lose-label');
    setTimeout(() => user_label_div.removeClass('lose-label'), 1000);
    comp_label_div.addClass('win-label');
    setTimeout(() => comp_label_div.removeClass('win-label'), 1000);
  }

  function tie() {
    comp_label_div.addClass('tie-label');
    setTimeout(() => comp_label_div.removeClass('tie-label'), 1000);
    user_label_div.addClass('tie-label');
    setTimeout(() => user_label_div.removeClass('tie-label'), 1000);
  }

  // Reset scoreboard and game 
  reset_button.on("click", function () {
    // results_p.text("Press A Button To Determine The Fate Of Middle Earth"); 
    // comp_choice_p.text(""); 
    // user_choice_p.text(""); 
    // userScore = 0; 
    // compScore = 0; 
    // userScore_span.text(userScore);
    // compScore_span.text(compScore); 
    location.reload(); // will refresh the page 
  })
}); // end document ready function 