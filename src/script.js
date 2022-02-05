function print(str) {
  out = document.getElementById("out");
  console.log(str);
  str = "Output: <br><br>" + str;
  out.innerHTML = str;
}
// Setup
function phoneticLookup(val) {
    let result = "";
  // Only change code below this line
  var lookup = {
  'alpha': 'Adams',
  'bravo': 'Boston',
  'charlie':'Chicago',
  'delta': 'Denver',
  'echo': 'Easy',
  'foxtrot': 'Frank'
  };
  result = lookup[val];
  return result;
  }
  
  
  output=phoneticLookup("charlie");
onload = print(output); //Output
