function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
const ar=["dog","cat","pokemon",["raichu","aabra","Garados"]];
output=`${ar}<br>\t unshift(Lion): ${ar.unshift("Lion")}<br>\t${ar}`;


console.log(output);
onload=print(output); //Output