function operate(a,b){

  switch (operator){

    case '+':
    answer = parseInt(a) + parseInt(b) 
    break;
    case '-':
    answer = parseInt(a) - parseInt(b) 
    break;
    case '/':
    answer = parseInt(a) / parseInt(b) 
    break;
    case 'x':
    answer = parseInt(a) * parseInt(b) 
    break;
  }
operator = ''
secondNumber = ''
  }
  const display = document.getElementById('display');
  const numBtns = document.querySelectorAll('.btn');
  const operatorBtns = document.querySelectorAll('.opBtn');
  const equal = document.getElementById('equal');
  const display2 = document.getElementById('display2');
  const clearAll = document.getElementById('clear')
  const deleteNum = document.getElementById('del')
  

  let secondNumber = '';
  let firstNumber = '';
  let operator = '';
  let answer = '';
  
  function deleteNumber() {
  
    firstNumber = firstNumber.toString().slice(0,-1)
    display.textContent = firstNumber

  }
    
  
  function clear (){
    operator = ''
    firstNumber = ''
    secondNumber = ''
    answer = ''
    display.textContent = ''
    display2.textContent = ''

  }
  
  function showAnswer(){
    display.textContent = answer
  }
  
  function buildFirstNumber(num){
    firstNumber = firstNumber.toString() + num.toString() 
  }
  function buildSecondNumber(num){
    secondNumber = secondNumber.toString() + num.toString() 
  }
  
  function showFirstNumber(){
    display.textContent = firstNumber
  }
  function showSecondNumber(){
    display2.textContent = `${firstNumber} ${operator} ${secondNumber}`
  }
  
  
   
  operatorBtns.forEach(btn => {
    btn.addEventListener('click', function() {

      display.textContent = ''
    if(operator === ''){
      operator = this.value
    }
      else {
      operate(firstNumber,secondNumber)
      firstNumber = answer
      showFirstNumber()
      operator = this.value
      console.log(firstNumber)
      console.log(secondNumber)
    }
      
  })
  }) //oper btn
    
  numBtns.forEach(btn => {
    btn.addEventListener('click', function() {    
    if (secondNumber === '' && operator === ''){
      display.textContent = ''
      buildFirstNumber(btn.innerText)
      showFirstNumber()
    }
  
    else if(firstNumber !== '' && operator !== ''){
      display.textContent = ''
      buildSecondNumber(btn.innerText)
      showSecondNumber() 
    }
      
    })
  
  }) //Number btns

  equal.addEventListener('click', function() {     
        operate(firstNumber,secondNumber)
        firstNumber = answer
        showAnswer()

  });

  clearAll.addEventListener('click', function(){
    clear()
  })

  deleteNum.addEventListener('click', function(){
    deleteNumber()
  })