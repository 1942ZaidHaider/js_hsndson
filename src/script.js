function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      {
        answer = "alpha";
      }
      break;
    case 2:
      {
        answer = "beta";
      }
      break;
    case 3:
      {
        answer = "gamma";
      }
      break;
    case 4:
      {
        answer = "delta";
      }
      break;
    default:
      {
        answer = "unknown";
      }
      break;
  }

  // Only change code above this line
  return answer;
}

output = caseInSwitch(1);
// output = `${testLogicalAnd(10)}`;
onload = print(output); //Output
