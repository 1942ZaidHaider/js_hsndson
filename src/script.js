function print(str) {
  out = document.getElementById("out");
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
const ar = [
  ["Milk", 5],
  ["Bread", 1],
  ["Egg", 36],
  ["Cabbage", 6],
  ["Coffee", 100]
];
output = `${ar}`;

console.log(output);
onload = print(output); //Output
