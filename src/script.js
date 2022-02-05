function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
var x = 'hello';
var y =' world';
// x[0]="H" Error
x='Hello';
output=`${x}`;


console.log(output);
onload=print(output); //Output