function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
var x = 'hello';
var y =' world';
// x[0]="H" Error
x='Hello';
output=`last char of ${x} = ${x[x.length-1]}`;


console.log(output);
onload=print(output); //Output