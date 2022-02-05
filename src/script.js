function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue)
        return "Yes, That was true";
    else
        return "No, That was false";  
    // Only change code above this line
  
  }

output = `${trueOrFalse(true)}<br>\t${trueOrFalse(false)}`; //oops global cannot be accessed because it is local to fun1
onload = print(output); //Output
