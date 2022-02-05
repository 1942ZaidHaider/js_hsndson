function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case "bob":  {
      answer = "Marley"; break;
    } case 42: {
      answer = "The Answer"; break;
    } case 1: {
      answer = "There is no #1"; break;
    } case 99: {
      answer = "Missed me by this much!"; break;
    } case 7: {
      answer = "Ate Nine"; break;
    }
    default: answer=""; break;
  }
    // Only change code above this line
    return answer;
  }
  
  output=chainToSwitch(7);
// output = `${testLogicalAnd(10)}`;
onload = print(output); //Output
