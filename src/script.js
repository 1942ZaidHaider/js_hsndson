function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
  }
function reusableFunction(){
    console.log("Hello World")
}
reusableFunction();
output = `refer to console`;
onload = print(output); //Output
