function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}

// Setup
function abTest(a, b) {
    // Only change code below this line
    if(a <0 || b < 0){
      return undefined;
    }
  
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  output=abTest(2,2); 
// output = `${testLogicalAnd(10)}`;
onload = print(output); //Output
