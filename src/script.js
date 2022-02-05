function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
let r= 12;
// This is a single line comment
/* This is a multiple  
line comment */

onload=print("r set to: "+r);