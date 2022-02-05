function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
  }
function timesFive(a){
    return(a*5);
}
output = `${timesFive(2)}`;
onload = print(output); //Output
