import validator from './validator.js';

const validador = document.getElementById("boton");
validador.addEventListener("click", validate);

function validate() {
  const valid = validator.isValid(document.getElementById("cardnumber").value);
  const masked = validator.maskify(document.getElementById("cardnumber").value);  
    
  if (valid) {
    // Show success in div#result
    document.getElementById("result").innerHTML = ("Su tarjeta " + masked +  " es válida");
    //console.log("if");
  }
  else {
    // Show error message in div#result
    document.getElementById("result").innerHTML = ("Su tarjeta " + masked + " es inválida");
    //console.log("else");
  }
}

/*const input = document.getElementById("cardnumber")
input.addEventListener("keypress", (e)=>{
  console.log(onlyNumbers(e));
})

function onlyNumbers(e){
 
  const key = e.keyCode || e.which;
  console.log(key)
  const keyboard= String.fromCharCode(key);
  const numbers = "0123456789";
  const specials = "8-37-38-46";
  let special_keyboard = false;

  for(const i in specials){
    if(key === specials[i]){
      special_keyboard = true;
    }        
  }

  if(numbers.indexOf(keyboard) === -1 && !special_keyboard){
    return false;
  }
}*/
