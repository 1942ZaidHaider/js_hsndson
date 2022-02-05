function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
  }
function functionWithArgs(a,b){
    console.log(a+b);
}
functionWithArgs(12,45);
output = `refer to console`;
onload = print(output); //Output
