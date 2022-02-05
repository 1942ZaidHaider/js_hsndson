function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 || val>20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  output=testLogicalOr(15); 
// output = `${testLogicalAnd(10)}`;
onload = print(output); //Output
