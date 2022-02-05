function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
// Setup
function checkObj(obj, checkProp) {
    // Only change code below this line
    return obj.hasOwnProperty(checkProp)?obj[checkProp]:"Not Found";
    // Only change code above this line
  }
  
  
  output="None";
onload = print(output); //Output
