function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val > 24) {
      return "Yes";    
    }  // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);  
output = `${testLogicalAnd(10)}`; //oops global cannot be accessed because it is local to fun1
onload = print(output); //Output
