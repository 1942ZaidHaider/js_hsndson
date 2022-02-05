function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 'a': answer="apple"; break;
      case 'b': answer="bird"; break;
      case 'c': answer="cat"; break;
      default: answer="stuff"; break;
    }
  
  
    // Only change code above this line
    return answer;
  }
output = switchOfStuff("a");
// output = `${testLogicalAnd(10)}`;
onload = print(output); //Output
