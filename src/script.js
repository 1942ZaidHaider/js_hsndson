function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
// Setup
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
output = `${compareEquality(10,"10")}<br>\t${compareEquality("12",12)}<br>\t${compareEquality(12,12)}`; //oops global cannot be accessed because it is local to fun1
onload = print(output); //Output
