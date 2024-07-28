var you;
var yourscore = 0;
var opponent;
var opponentscore = 0;

var choices = ["rock", "paper", "scissors"];
window.onload = function(){
	for(let i = 0; i < 3; i++){
	let choice = document.createElement("img");
	choice.id = choices[i];
	choice.src = choices[i] + ".jpg";
	choice.addEventListener("click",selectChoice);
	document.getElementById("choices").append(choice);
	}
}
function selectChoice(){

	you = this.id;
	document.getElementById("your-choice").src = you + ".jpg";
	//random for opponent 
	opponent = choices[Math.floor(Math.random() * 3)];
	document.getElementById("opponent-choice").src = opponent + ".jpg";
	//check for winner 
	if(you == opponent)
	{
		yourscore += 1;
		opponentscore += 1;
	}
	else 
	{
		if(you == "rock")
		{
			if(opponent == "scissors"){
				yourscore += 1;
			}
			else if(opponent == "paper"){
				opponentscore += 1;

			}
		}
		
			else if(you == "scissors")
		{
			if(opponent == "paper"){
				yourscore += 1;
			}
			else if(opponent == "rock"){
				opponentscore += 1;

			}
		}

			else if(you == "paper")
		{
			if(opponent == "rock"){
				yourscore += 1;
			}
			else if(opponent == "scissors"){
				opponentscore += 1;

			}
		}
	}
	document.getElementById("your-score").innerText = yourscore;
	document.getElementById("opponent-score").innerText = opponentscore;
}
