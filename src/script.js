function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
  }

  // Declare the myGlobal variable below this line
var myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal=5;
}
output = `${myGlobal}`; //oops global cannot be accessed because it is local to fun1
onload = print(output); //Output
