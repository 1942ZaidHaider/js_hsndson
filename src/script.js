function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
  }

 // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
    let outerWear="Sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
output = `${myOutfit()}`; //oops global cannot be accessed because it is local to fun1
onload = print(output); //Output
