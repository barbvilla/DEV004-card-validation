const validator = {
  isValid: isValid,
  maskify: maskify,
}

function maskify(creditCardNumber) {
  if (creditCardNumber.length < 4) return creditCardNumber;
  const last4Characters = creditCardNumber.substr(-4);
  const maskingCharacters = creditCardNumber.substr(0, creditCardNumber.length -4).replace(/./g, '#');
  const masked = (maskingCharacters + last4Characters);
  return masked;
}

function isValid(creditCardNumber) {
  // is creditCardNumber valid?
  const noData = isEmpty(creditCardNumber);
  if (noData) {
    return false;
  }
  const validNumber = isValidCardNumber(creditCardNumber);
  return validNumber;
}

function isEmpty(creditCardNumber) {
  if (creditCardNumber === "" || creditCardNumber === null) {
    alert("Campo vacio. Por favor introduzaca su número de tarjeta");
    return true;
  }
  return false;
}

function isValidCardNumber(creditCardNumber) {
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

function reverseArray(creditCardNumber) {
  const arr = creditCardNumber.split('');
  const rev = arr.reverse();
  return rev
}

function multiplyOddIndexByTwo(anyArray) {
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

function addDigits(x) {
  const d = Math.floor(x / 10)
  //console.log(d)
  const r = x % 10
  return (d + r)
}

function addNumbers(anyArray) {
  const total = anyArray.reduce(function (a, b) { return a + b; })
  return total
}

function check(anyArray) {
  if ((anyArray % 10) === 0) {
    return true
  }
  else {
    return false
  }
}

export default validator;