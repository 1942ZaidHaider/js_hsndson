function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}

function isLess(a, b) {
    // Only change code below this line
    return a<b;
    // Only change code above this line
  }
  
  output=isLess(10, 15); 
// output = `${testLogicalAnd(10)}`;
onload = print(output); //Output
