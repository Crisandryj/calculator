function add(a,b) {
  return a + b
}

function subtract(a,b){
  return a - b
}

function divide(a,b){
  return a/b
}

function multiply(a,b){
  return a*b
}

//create an array of numbers that are selected
//reduce them to a number based on the function they select
//when = is clicked...display result reduced
//let int value for new function be equal to answer

const display = document.getElementById('display')
const buttons = document.querySelectorAll('.btn')
let values= [];
let answer;
let operator;
let funcName;
let intValue = Number('0');


buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    if (btn.value === 'add'){
      operator = btn.value
    }
    else if (btn.value === 'subtract'){
      operator = btn.value
    }
    else if (btn.value === 'multiply'){
      operator = btn.value
    }
    else if (btn.value === 'divide'){
      operator = btn.value
    }

    if(Number(btn.value)&&intValue>0) {
      display.textContent = btn.value 
      values.push(Number(btn.value))}

    if(intValue === 0 && Number(btn.value)){
      display.textContent = btn.value
      intValue = Number(btn.value)
    }

    if(operator === 'add' && btn.value ==='=')
      {answer = values.reduce((previousValue,currentValue) => add(previousValue,currentValue),
      intValue)
      intValue = answer
      values = []
      display.textContent = answer}    
    if(operator === 'subtract' && btn.value ==='=')
      {answer = values.reduce((previousValue,currentValue) => subtract(previousValue,currentValue),
      intValue)
      intValue = answer
      values = []
      display.textContent = answer}  
    if(operator === 'multiply' && btn.value ==='=')
      {answer = values.reduce((previousValue,currentValue) => multiply(previousValue,currentValue),
      intValue)
      intValue = answer
      values = []
      display.textContent = answer}  
    if(operator === 'divide' && btn.value ==='=')
      {answer = values.reduce((previousValue,currentValue) => divide(previousValue,currentValue),
      intValue)
      intValue = answer
      values = []
      display.textContent = answer} 



    
    console.log(btn.value)
    console.log(answer)
    console.log(values)
    console.log(operator)
    console.log(intValue)
    })  
});


   
