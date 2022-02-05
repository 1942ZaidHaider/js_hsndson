function print(str){
    out=document.getElementById("out");
    str="Output: <br><br>"+str;
    out.innerHTML=str;
}
const ar=["dog","cat","pokemon"];
output=`${ar} <br> type: ${typeof(ar)}`;


console.log(output);
onload=print(output); //Output