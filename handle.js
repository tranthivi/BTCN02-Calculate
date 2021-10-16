const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");

function isNumber(n) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

function validation(input, type) {
  const value = input.value;
  const check = isNumber(value);
  const message = document.getElementsByClassName("message");

  if (check) {
    message[type].style.display = "none";
  } 
  else {
    message[type].style.display = "block";
  }
}
function Calculate(){
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    
    var result = 0;

    var radioCheck = document.getElementsByName("flexRadioDefault");
    for (var i = 0; i < radioCheck.length; i++){
      if (radioCheck[i].checked === true){
        if(radioCheck[i].value=="Cộng")
        {
          result = parseInt(number1) + parseInt(number2);
        }

        else if(radioCheck[i].value=="Trừ")
        {
          result = parseInt(number1) - parseInt(number2);
        }

        else if(radioCheck[i].value=="Nhân")
        {
          result = parseInt(number1) * parseInt(number2);
        }

        else if(radioCheck[i].value=="Chia")
        {
          result = parseInt(number1) / parseInt(number2);
        }

        document.getElementById("result").value = result;
        
      }
    }  
    document.getElementById("notification").innerHTML="Vui lòng chọn phép tính"
    if(document.getElementById("result").value!="")
    {
      document.getElementById("notification").innerHTML="";
    }
    
    if(document.getElementById("num1").value=="" || document.getElementById("num2").value=="")
    {
      document.getElementById("notification").innerHTML="Vui lòng điền đủ 2 số";
    } 
  }
  