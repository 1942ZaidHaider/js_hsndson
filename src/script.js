function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
var c;

output="variable is set to "+c ;

onload=print(output);