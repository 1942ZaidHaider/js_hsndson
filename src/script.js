function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

output = testElseIf(7);
// output = `${testLogicalAnd(10)}`;
onload = print(output); //Output
