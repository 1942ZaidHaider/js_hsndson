function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
const x = 45;
// x= 43 // this will give error;
output="Constant variables cannot be changed: x =" +x ;
onload=print(output);