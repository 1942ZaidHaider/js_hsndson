function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The "+myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb; // Change this line
// Only change code above this line
output=wordBlanks;//`3rd to char of ${x} = ${x[x.length-3]}`;


console.log(output);
onload=print(output); //Output