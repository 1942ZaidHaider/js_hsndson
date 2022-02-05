function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
var x = 'hello';
var y =' world';
y+="-Appended"
output=`${x} is ${x.length} chars long`;


console.log(output);
onload=print(output); //Output