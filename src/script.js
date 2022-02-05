function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
  }

  function myLocalScope() {
    // Only change code below this line
    myVar=12;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
output = `Refer to console`; //oops global cannot be accessed because it is local to fun1
onload = print(output); //Output
