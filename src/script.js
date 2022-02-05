function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
const x = 45;
const y = 90;
output=x+"-"+y+"="+(x-y);
onload=print(output);