function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
// Setup
function testNotEqual(val) {
    if (val !== 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  

  
output = `${testNotEqual(10)}<br>\n${testNotEqual(99)}<br>\n${testNotEqual("99")}`; //oops global cannot be accessed because it is local to fun1
onload = print(output); //Output
