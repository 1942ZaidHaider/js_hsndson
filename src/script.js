function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 1: case 2: 
      case 3: answer="Low"; break;
      case 4: case 5: 
      case 6: answer="Mid"; break;
      case 7: case 8: 
      case 9: answer="High"; break;
    default : answer="err";
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  output=sequentialSizes(1);
// output = `${testLogicalAnd(10)}`;
onload = print(output); //Output
