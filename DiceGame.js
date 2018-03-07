"use strict";

	alert("Lets play some Hockey!!!");
	let difficulty = prompt(" What would you like your difficulty to be? ( Hard(0) , Medium(1) , Easy(2) )");
	let playerScore = 0, cpuScore = 0;
	alert("Alrighty! First to five wins the game!");
	while(playerScore !== 5 && cpuScore !== 5){
		if(faceOff()){
			if(scoreGoal()){
				alert("You scored!!!")
				playerScore++;
			}
		}
		else{
			if(bodyCheck()){
				if(scoreGoal()){
					alert("You scored!!!")
					playerScore++;
				}
			}
			else{
				if(!makeSave()){
					alert("The CPU scored!!!")
					cpuScore++;
				}
			}
		}
	}
	
function scoreGoal(){
	let num = rollDie(12)
	let guess = prompt("Guess a number in order to score a goal: (1 - 12)");
	if(Math.abs(guess - num)<=difficulty){
		return true;
	}
	else{
		return false;
	}
}

function makeSave(){
	let num = rollDie(6)
	let guess = prompt("Guess a number in order to make the save: (1 - 6)");
	if(Math.abs(guess - num)<=difficulty){
		return true;
	}
	else{
		return false;
	}
}

function bodyCheck(){
	let num = rollDie(8)
	let guess = prompt("Guess a number in order to bodycheck the other player: (1 - 8)");
	if(Math.abs(guess - num)<=difficulty){
		return true;
	}
	else{
		return false;
	}
}

function faceOff(){
	let num = rollDie(4);
	let guess = prompt("Guess a number in order to win the faceoff: (1 - 4)");
	if(Math.abs(guess - num)<=difficulty){
		return true;
	}
	else{
		return false;
	}
}

function rollDie(numOfSides){
	return parseInt(Math.random() * numOfSides) + 1;
}