function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
const ar=["dog","cat","pokemon",["raichu","aabra","Garados"]];
output=`ar[3][0] ${ar[3][0]}<br>\nar[3][1] ${ar[3][1]}<br>\n`;


console.log(output);
onload=print(output); //Output