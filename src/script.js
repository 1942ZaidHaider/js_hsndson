function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
var x = 'this is a string in single quotes'
output=x;//`${x}`;


console.log(output);
onload=print(output); //Output