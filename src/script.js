function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
const x = 2;
var y = 90.1;
output="y="+y;
onload=print(output);