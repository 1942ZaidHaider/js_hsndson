function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
var x = 43;
x += 5;
output=`x=43 => x+=5 => ${x}`;



onload=print(output); //Output