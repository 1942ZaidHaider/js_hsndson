function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
// Setup
function testEqual(r) {
    if (r==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  
output = `${testEqual(10)}<br>\t${testEqual("12")}<br>\t${testEqual(12)}`; //oops global cannot be accessed because it is local to fun1
onload = print(output); //Output
