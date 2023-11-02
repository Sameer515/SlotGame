//1-Deposit Credit
//2-collect Bet amount
//3-determine number of lines to bet on
//4-spin the game slots
//5-check if the user won
//6-credit the user thier winnings
//7-play the game again

const prompt = require('prompt-sync')();

const deposit = () => {
	while (true) {
		const depositAmount = prompt('Enter a Deposit Amount:');
		const numberDepositAmount = parseFloat(depositAmount);
		if (
			isNaN(numberDepositAmount) ||
			numberDepositAmount <= 0
		) {
			console.log('Please Enter a valid deposit Amount');
		} else {
			return numberDepositAmount;
		}
	}
};

const getNumberofbetlines = () => {
	while (true) {
		const lines = prompt(
			'Please enter number of lines to bet on (1-3):'
		);
		const numberofLines = parseFloat(lines);
		if (
			isNaN(numberofLines) ||
			numberofLines <= 0 ||
			numberofLines > 3
		) {
			console.log('Invalid number of lines');
		} else {
			return numberofLines;
		}
	}
};

const getBet= (balance)=>{
    while (true) {
		const bet = prompt(
			'Enter the total bet:'
		);
		const numberBet = parseFloat(bet);
		if (
			isNaN(numberBet) ||
			numberBet <= 0 ||
			numberBet > balance
		) {
			console.log('Invalid number of lines');
		} else {
			return numberofLines;
		}
	}
}

let balance = deposit();
const numberofLines = getNumberofbetlines();
