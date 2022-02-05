function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
var c = "hello world";

output="string variable c to "+c ;

onload=print(output);