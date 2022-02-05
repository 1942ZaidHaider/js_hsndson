function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
var c =10;
var C=12;

output="c = "+c+", C = "+C ;

onload=print(output);