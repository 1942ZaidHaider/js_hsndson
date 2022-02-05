function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
const x = 2;
const y = 90;
output=y+"/"+x+"="+(y/x);
onload=print(output);