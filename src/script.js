function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else{
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  output=testElse(4); 
// output = `${testLogicalAnd(10)}`;
onload = print(output); //Output
