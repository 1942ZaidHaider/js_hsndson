function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}

function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }

output = `${welcomeToBooleans()}`; //oops global cannot be accessed because it is local to fun1
onload = print(output); //Output
