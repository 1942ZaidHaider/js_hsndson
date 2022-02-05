function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
const x = 6.1;
var y = 1.1;
output=`${x} / ${y} = ${x/y}`;
onload=print(output);