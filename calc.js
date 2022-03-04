function add(a,b) {return a + b}
function subtract(a,b){return a - b}
function divide(a,b){return a/b}
function multiply(a,b){return a*b}

const display = document.getElementById('display');
const numBtns = document.querySelectorAll('.btn');
const operatorBtns = document.querySelectorAll('.opBtn');
const equal = document.getElementById('equal');

let buildNumber =[];
let calculateValues =[];
let secondNumber = Number(0);
let firstNumber = Number(0);
let operator;
let answer;



display.textContent = Number(0);

numBtns.forEach(btn => {
  btn.addEventListener('click', function() {    
  if (operator != '+' && secondNumber === 0){
  console.log(operator)
  calculateValues.shift()
  buildNumber.push(Number(this.value))
  firstNumber = Number(buildNumber.join(""))
  console.log(firstNumber)
  display.textContent = firstNumber
  }

  else if(firstNumber > 0){
    calculateValues.shift()
    buildNumber.push(Number(this.value))
    secondNumber = Number(buildNumber.join(""))
    console.log(secondNumber)
    console.log(firstNumber)
    display.textContent = secondNumber
  }

  if (firstNumber > 0 && secondNumber > 0 && answer > 0 ){
    switch (operator){
      case '+':
        answer = add(answer,secondNumber)
        display.textContent = answer
        console.log(answer)
        
        break;
      case '-':
        answer = subtract(answer,secondNumber)
        display.textContent = answer
        console.log(answer)
        break;
      case '/':
        answer = divide(answer,secondNumber)
        display.textContent = answer
        console.log(answer)
        break;
      case 'x':
        answer = multiply(answer,secondNumber)
        display.textContent = answer
        console.log(answer)
        break;
     }

  }
 else if (firstNumber > 0 && secondNumber > 0){
    switch (operator){
      case '+':
        answer = add(firstNumber,secondNumber)
        console.log(answer)
        
        break;
      case '-':
        answer = subtract(firstNumber,secondNumber)
        console.log(answer)
        break;
      case '/':
        answer = divide(firstNumber,secondNumber)
        console.log(answer)
        break;
      case 'x':
        answer = multiply(firstNumber,secondNumber)
        console.log(answer)
        break;
     }
    }//if first and 2nd number greater than 0
    
    })

operatorBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    display.textContent =''
    buildNumber.length = ''

  operator = this.value

})
}) //Number btns
}) //Number btns


equal.addEventListener('click', function() {

      display.textContent = answer

});

