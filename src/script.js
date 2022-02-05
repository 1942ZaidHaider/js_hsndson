function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
var x = 'hello';
x +=' world';
output=x;//`${x}`;


console.log(output);
onload=print(output); //Output