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
let intValue = Number(0);
let operator;
let answer;
let arryValue;
let stopBuildingNumber;

display.textContent = Number(0);

numBtns.forEach(btn => {
  btn.addEventListener('click', function() {
  if (operator !=='+' && operator !== '-' && operator !== 'x' && operator !== '/'){
    calculateValues.shift()
    buildNumber.push(Number(this.value))
    console.log(buildNumber)
    intValue = Number(buildNumber.join(""))
    answer = Number(buildNumber.join(""))
    console.log(intValue)
    display.textContent = intValue}
  else{
    
  if (stopBuildingNumber !='yes'){
  calculateValues.shift()
  buildNumber.push(Number(this.value))
  console.log(buildNumber)
  let arryValue = Number(buildNumber.join(""))
  console.log(arryValue)
  calculateValues.push(Number(arryValue))
  console.log(calculateValues)
  console.log(answer)
  display.textContent = arryValue
  }
  }
}) //Number btns
}) //Number btns

if (display.textContent === ''){
  stopBuildingNumber = 'yes'
}


operatorBtns.forEach(btn => {
  btn.addEventListener('click', function() {
  operator = this.value
switch (this.value){
  case '+':
    display.textContent = ''
    buildNumber.length = 0;
    answer = calculateValues.reduce((a,b) => add(a,b),intValue)
    intValue = answer
    stopBuildingNumber = ''
    console.log(answer)
    break;
  case '-':
    display.textContent = ''
    buildNumber.length = 0;
    console.log(answer)
    console.log(intValue)
    answer = calculateValues.reduce((a,b) => subtract(a,b),intValue)
    console.log(intValue)
    intValue = answer
    stopBuildingNumber = ''
    console.log(answer)
    break;
  case '/':
    display.textContent = ''
    buildNumber.length = 0;
    answer = calculateValues.reduce((a,b) => divide(a,b),intValue)
    intValue = answer
    stopBuildingNumber = ''
    console.log(answer)
    break;
  case 'x':
    display.textContent = ''
    buildNumber.length = 0;
    answer = calculateValues.reduce((a,b) => multiply(a,b),intValue)
    intValue = answer
    stopBuildingNumber = ''
    console.log(answer)
    break;
 }

})
})



equal.addEventListener('click', function() {

  switch (operator){
    case '+':
      answer = calculateValues.reduce((a,b) => add(a,b),intValue)
      intValue = answer
      display.textContent = answer
      stopBuildingNumber = ''
      buildNumber.length = 0;
      calculateValues.length= 0 
      console.log(answer)
      break;
    case '-':
      answer = calculateValues.reduce((a,b) => subtract(a,b),intValue)
      intValue = answer
      display.textContent = answer
      stopBuildingNumber = ''
      buildNumber.length = 0;
      calculateValues.length= 0
      console.log(answer)
      break;
    case '/':
      answer = calculateValues.reduce((a,b) => divide(a,b),intValue)
      intValue = answer
      display.textContent = answer
      stopBuildingNumber = ''
      buildNumber.length = 0;
      calculateValues.length= 0
      console.log(answer)
      break;
    case 'x':
      answer = calculateValues.reduce((a,b) => multiply(a,b),intValue)
      intValue = answer
      display.textContent = answer
      stopBuildingNumber = ''
      buildNumber.length = 0;
      calculateValues.length= 0
      console.log(answer)
      break; }

});



