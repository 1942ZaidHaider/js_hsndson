function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
let r= 12;
// This is a single line comment
/* This is a multiple  
line comment */

output=r+" Stored in variable r";

onload=print(output);