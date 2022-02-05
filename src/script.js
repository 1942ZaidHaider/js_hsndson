function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
const ar=["dog","cat","pokemon",["raichu","aabra","Garados"]];
output=`${ar} <br>\n type of ar.length-1: ${typeof(ar[ar.length-1])}`;


console.log(output);
onload=print(output); //Output