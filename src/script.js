function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
let count = 0;

const myDog = {
    // Only change code below this line
  name:"Milo",
  legs:4,
  tails:1,friends:['me']
    // Only change code above this line
  };
output = `${myDog} ${myDog.name}`;
onload = print(output); //Output
