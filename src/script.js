function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
let c = 45;

output="c initialized to "+c ;

onload=print(output);