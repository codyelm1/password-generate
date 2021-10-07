// Assignment Code

//selecting elements to create and make possible to use.
const resultEl = document.getElementById('result');
console.log = resultEl

lengthEl = document.getElementById('length');
console.log = lengthEl
//console.log
const uppercaseEl = document.getElementById('uppercase');
console.log = uppercaseEl
//console.log
const lowercaseEl = document.getElementById('lowercase');
console.log = lowercaseEl
//console.log
const numbersEl = document.getElementById('numbers');
console.log = numbersEl
//console.log
const symbolsEl = document.getElementById('symbols');
console.log = symbolsEl
//console.log
const generateEl = document.getElementById('generate');
console.log = generateEl
//console.log
const clipboard = document.getElementById('clipboard');
console.log = clipboard
//console.log
const randomFunc = {
// console log all elements 
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

  console.log = textarea
  console.log = password
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});


 generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// can select anything between 8 and 120.
	if(typesCount === 0) {
		return '';
	}
	
	// creating a loop.
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}
//creating the random function so it will generate and process a
//random password 
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}








  