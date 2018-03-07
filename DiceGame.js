"use strict";

	alert("Lets play some Hockey!!!");
	let playerScore = 0, cpuScore = 0;
	alert("Alrighty! First to five wins the game!");
	
	while(playerScore !== 5 && cpuScore !== 5){
		if(faceOff(prompt("Guess a number in order to win the faceoff: (1 - 3)"))){
			
			if(checkIfGoalScored(prompt("Guess a number in order to score a goal: (1 - 12)"))){
				alert("You scored!!!")
				playerScore++;
			}
		}
		
		else{
			
			if(checkBodyCheck(prompt("Guess a number in order to bodycheck the other player: (1 - 6)"))){
			
				if(checkIfGoalScored(prompt("Guess a number in order to score a goal: (1 - 12)"))){
					alert("You scored!!!")
					playerScore++;
				}
			}
			
			else{
			
				if(!checkIfSaveMade(prompt("Guess a number in order to make the save: (1 - 4)"))){
					alert("The CPU scored!!!")
					cpuScore++;
				}
			}
		}
	}
	
function checkReboundGoal(guessRebound){
	let num = rollDie(8)
	if(Math.abs(guessRebound - num) === 0){
		return true;
	}
	else{
		return false;
	}
}
	
function checkIfGoalScored(guessGoal){
	let num = rollDie(12);
	if(Math.abs(guessGoal - num) === 0){
		return true;
	}
	else if(Math.abs(guessGoal - num) <= 2){
		return checkReboundGoal(prompt("Guess a number in order to score a rebound goal: (1 - 8)"));
	}
	return false;
}

function checkIfSaveMade(guessSave){
	let num = rollDie(4);
	if(Math.abs(guessSave - num) === 0){
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

function faceOff(guessFaceOff){
	let num = rollDie(3);
	if(Math.abs(guessFaceOff - num) === 0){
		return true;
	}
	return false;
}

function rollDie(numOfSides){
	return parseInt(Math.random() * numOfSides) + 1;
}