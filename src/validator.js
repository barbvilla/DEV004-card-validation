const validator = document.getElementById("boton");
validator.addEventListener("click", validate);

function validate() {
  const valid = isValid(document.getElementById("cardnumber").value);
    
  if (valid) {
    // Show success in div#result
    document.getElementById("result").innerHTML = ("Su tarjeta es válida");
    //console.log("if");
  }
  else {
    // Show error message in div#result
    document.getElementById("result").innerHTML = ("Su tarjeta inválida");
    //console.log("else");
  }
}

function isValid(creditCardNumber){
  // is creditCardNumber valid?
  const noData = isEmpty(creditCardNumber);
  if (noData){
    return false
  }
  const validNumber = isValidCardNumber(creditCardNumber);
  return validNumber       
}

function isEmpty(creditCardNumber){
  if (creditCardNumber === "" || creditCardNumber === null){
    alert("Campo vacio. Por favor introduzaca su número de tarjeta");
    return true;      
  }
  return false;      
}

function isValidCardNumber(creditCardNumber){
  //crear array en reversa
  const reversedNumber = reverseArray(creditCardNumber);
  //multiplicar elemento con indice impar por 2
  const multiplicationOddIndexes = multiplyOddIndexByTwo(reversedNumber);
  //suma numeros del array
  const sumOfNumbers = addNumbers(multiplicationOddIndexes);
  //verificación
  const validation = check(sumOfNumbers)
  //console.log(sumOfNumbers);
  //console.log(validation);
  return validation
}

function reverseArray(creditCardNumber){
  const arr = creditCardNumber.split('');
  const rev = arr.reverse();
  return rev            
}

function multiplyOddIndexByTwo(anyArray){
  const new_arr = [];
  for (let i = 0; (i < anyArray.length); ++i) {                  
    if (i % 2 === 0) {
      const odd = Number(anyArray[i]) * 1;
      new_arr.push(odd);          
    }
    else {
      const even = Number(anyArray[i]) * 2;
      //sumar 2 digitos 
      const y = addDigits(even)         
      new_arr.push(y);
    }        
  }
  return new_arr
}
 
function addDigits(x){
  const d = Math.floor(x/10)
  //console.log(d)
  const r = x%10
  return (d + r)
}

function addNumbers(anyArray){
  const total = anyArray.reduce(function(a,b){return a + b;})
  return total
}

function check(anyArray){
  if ((anyArray%10) === 0) {
    return true
  }
  else {
    return false
  }
}

/* function maskify(creditCardNumber){
  return creditCardNumber.replace(/.(?=.{4})/g, "#")
} */
  

export default validator;
/*
const validator = {
  isValid : ()=>{},
  maskify : () =>{}
}*/