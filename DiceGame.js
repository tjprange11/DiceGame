"use strict";

	alert("Lets play some Hockey!!!");
	let playerScore = 0, cpuScore = 0;
	alert("Alrighty! First to five wins the game!");
	
	while(playerScore !== 5 && cpuScore !== 5){
		if(checkFaceOff(askForFaceOff())){
			
			alert("You just won the faceoff! Now you have a chance to score!");
			
			if(checkIfGoalScored(askForGoalScored())){
				
				alert("You scored!!!");
				playerScore++;
				updateScore(playerScore, cpuScore);
				
			}
			else{
				
				alert("The goalie saved it and now there is a faceoff!");
			}
		}
		
		else{
			
			alert("You lost the faceoff! Now you have a chance to check the player with the puck before they can shoot it!");
			
			if(checkBodyCheck(askForBodyCheck())){
				
				alert("You bodychecked the player with the puck! Now you have a chance to score!");
			
				if(checkIfGoalScored(askForGoalScored())){
					
					alert("You scored!!!");
					playerScore++;
					updateScore(playerScore, cpuScore);
					
				}
				else{
					
					
					alert("The goalie saved it and now there is a faceoff!");
				}
			}
			
			else{
				
				alert("You missed the bodycheck! Now Mike Smith has to make a save!");
			
				if(!checkIfSaveMade(askForSaveMade())){
					
					alert("The CPU scored!!!");
					cpuScore++;
					updateScore(playerScore, cpuScore);
					
				}
				
				else{
					
					alert("BIG SAVE BY MIKEY SMITH!!!");
					
					if(checkIfRebound()){
						
						alert("OH NO! Mike Smith let up a rebound!")
						
						if(!checkIfSaveMade(askForSaveMade())){
							
							alert("The CPU scored!!!");
							cpuScore++;
							updateScore(playerScore, cpuScore);
							
						}
						
						else{
							
							alert("ANOTHER BIG SAVE BY MIKEY SMITH!!!");
					
						}
					}
					
				}
			}
		}
	}
	if(playerScore === 5){
		alert("YOU WON!");
	}
	else{
		alert("You lost!");
	}
	
function checkReboundGoal(guessRebound){
	let num = rollDie(5)
	if(Math.abs(guessRebound - num) === 0){
		return true;
	}
	else{
		return false;
	}
}
	
function checkIfGoalScored(guessGoal){
	let num = rollDie(7);
	if(Math.abs(guessGoal - num) === 0){
		return true;
	}
	else if(Math.abs(guessGoal - num) <= 2){
		alert("You almost scored! There a huge rebound and you still have a chance to score!");
		return checkReboundGoal(askForRebound());
	}
	return false;
}

function checkIfRebound(){
	let num = rollDie(20);
	if(num === 1){
		return true;
	}
	return false;
}

function checkIfSaveMade(guessSave){
	let num = rollDie(10);
	if(Math.abs(guessSave - num) !== 0){
		return true;
	}
	else{
		return false;
	}
}

function checkBodyCheck(guessCheck){
	let num = rollDie(6);
	if(Math.abs(guessCheck - num) === 0){
		return true;
	}
	return false;
}

function checkFaceOff(guessFaceOff){
	let num = rollDie(3);
	if(Math.abs(guessFaceOff - num) === 0){
		return true;
	}
	return false;
}

function askForFaceOff(){
	let guess = prompt("Guess a number in order to win the faceoff: (1 - 3)");
	if(!validateNumber(1 , 3 , guess)){
		alert("Invalid Number!");
		askForFaceOff();
	}
	return guess;
}

function askForBodyCheck(){
	let guess = prompt("Guess a number in order to bodycheck the other player: (1 - 4)");
	if(!validateNumber(1 , 4 , guess)){
		alert("Invalid Number!");
		askForBodyCheck();
	}
	return guess;
}

function askForSaveMade(){
	let guess = prompt("Guess a number in order to make the save: (1 - 10)");
	if(!validateNumber(1 , 10 , guess)){
		alert("Invalid Number!");
		askForSaveMade();
	}
	return guess;
}

function askForRebound(){
	let guess = prompt("Guess a number in order to score a rebound goal: (1 - 5)");
	if(!validateNumber(1 , 5 , guess)){
		alert("Invalid Number!");
		askForRebound();
	}
	return guess;
}

function askForGoalScored(){
	let guess = prompt("Guess a number in order to score a goal: (1 - 7)");
	if(!validateNumber(1 , 7 , guess)){
		alert("Invalid Number!");
		askForGoalScored();
	}
	return guess;
}

function validateNumber(low, high, num){
	if(num >= low && num <= high){
		return true;
	}
	return false;
}

function updateScore(playerScore , cpuScore){
	alert("Your Score: " + playerScore + " CPU Score: " + cpuScore );
}

function rollDie(numOfSides){
	return parseInt(Math.random() * numOfSides) + 1;
}