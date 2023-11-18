//1-Deposit Credit
//2-collect Bet amount
//3-determine number of lines to bet on
//4-spin the game slots
//5-check if the user won
//6-credit the user thier winnings
//7-play the game again

const prompt = require('prompt-sync')();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
	A: 2,
	B: 4,
	C: 6,
	D: 8,
};

const SYMBOL_VALUES = {
	A: 5,
	B: 4,
	C: 3,
	D: 2,
};

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

const getBet = (balance, lines) => {
	while (true) {
		const bet = prompt('Enter bet per line:');
		const numberBet = parseFloat(bet);
		if (
			isNaN(numberBet) ||
			numberBet <= 0 ||
			numberBet > balance / lines
		) {
			console.log('Invalid bet, try again');
		} else {
			return numberBet;
		}
	}
};

const spin = () => {
	const symbols = [];
	for (const [symbol, count] of Object.entries(
		SYMBOLS_COUNT
	)) {
		for (let i = 0; i < count; i++) symbols.push(symbol);
	}
	const reels = [];

	for (let i = 0; i < COLS; i++) {
		reels.push([]);
		const reelSymbols = [...symbols];
		for (let j = 0; j < ROWS; j++) {
			const randomIndex = Math.floor(
				Math.random() * reelSymbols.length
			);
			const selectedSymbol = reelSymbols[randomIndex];
			reels[i].push(selectedSymbol);
			reelSymbols.splice(randomIndex, 1);
		}
	}
	return reels;
	//console.log(symbols);
};

const transpose = (reels) => {
	const rows = [];
	for (let i = 0; i < ROWS; i++) {
		rows.push([]);
		for (j = 0; j < COLS; j++) {
			row[i].push(reels[j][i]);
		}
	}
	return rows;
};

let balance = deposit();
const numberofLines = getNumberofbetlines();
const bet = getBet(balance, numberofLines);
const reels = spin();
const rows =transpose(reels);
console.log(transpose);