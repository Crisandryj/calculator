function operate(a,b){

switch (operator){
  case '+':
  answer = a + b
  break;
  case '-':
  answer = a - b
  break;
  case '/':
  answer = a/b
  break;
  case 'x':
  answer = a*b
  break;
}
}
const display = document.getElementById('display');
const numBtns = document.querySelectorAll('.btn');
const operatorBtns = document.querySelectorAll('.opBtn');
const equal = document.getElementById('equal');

let buildNumber =[];
let calculateValues =[];
let secondNumber = Number(0);
let firstNumber = Number(0);
let operator;
let answer = Number(0);
let continueBuildingNumber = true;
let counter = Number(0);

display.textContent = Number(0);

function showAnswer(){
  display.textContent = answer
}

function buildFirstNumber(num){
  calculateValues.shift()
  buildNumber.push(Number(num))
  firstNumber = Number(buildNumber.join(""))
}
function buildSecondNumber(num){
  calculateValues.shift()
  buildNumber.push(Number(num))
  secondNumber = Number(buildNumber.join(""))
}

function showFirstNumber(){
  display.textContent = firstNumber
}
function showSecondNumber(){
  display.textContent = secondNumber
}


 
operatorBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    display.textContent =''
    buildNumber.length = ''
    operator = this.value
})
}) //oper btn
  
numBtns.forEach(btn => {
  btn.addEventListener('click', function() {    
  if (operator != '+' && secondNumber === 0){
    buildFirstNumber(this.value)
    showFirstNumber()
  }

  else if(firstNumber > 0 && operator === '+'){
    buildSecondNumber(this.value)
    showSecondNumber()
  }
 
  if (answer > 0){
    operate(answer,secondNumber)
   
  }

  else if (firstNumber > 0 && secondNumber > 0 && answer === 0){
    operate(firstNumber,secondNumber)
  
  }
    
  })

}) //Number btns




equal.addEventListener('click', function() {

      showAnswer()

});

