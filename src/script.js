function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
var x = 'this is a \t \'string\' \n in single quotes'
output=x;//`${x}`;


console.log(output);
onload=print("console"); //Output