function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
let r= 12;
let x=r;

output="r = "+r+", x = "+x;

onload=print(output);