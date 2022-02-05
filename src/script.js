function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
  }

  let sum = 0;

  function addThree() {
    sum = sum + 3;
  }
  
  // Only change code below this line
  function addFive() {
    sum = sum + 5;
  }

output = `${typeof(addFive())}`; //oops global cannot be accessed because it is local to fun1
onload = print(output); //Output
