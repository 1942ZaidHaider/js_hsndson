function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
var x = "FirstLine \n\t\\SecondLine\nThirdLine\
"
output=x;//`${x}`;


console.log(output);
onload=print("in console"); //Output