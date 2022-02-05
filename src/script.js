function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
const ar=["dog","cat","pokemon",["raichu","aabra","Garados"]];
output=`ar[0] ${ar[0]}<br>\nar[1] ${ar[1]}<br>\nar[2] ${ar[2]}<br>\nar[3] ${ar[3]}<br>\n`;


console.log(output);
onload=print(output); //Output