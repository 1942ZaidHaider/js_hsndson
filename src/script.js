function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
const x = 43;
var y = 9;
output=`${x} % ${y} = ${x%y}`;
onload=print(output);