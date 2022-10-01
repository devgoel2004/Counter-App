let input=document.getElementById("input_content").innerText;
input=Number(input);
let add=document.getElementById("add");
let subtract= document.getElementById("minus");
add.addEventListener("click",()=>{
    input++;
    console.log(input);
    document.getElementById("input_content").value=input;
})
subtract.addEventListener("click",()=>{
    input--;
    console.log(input);
    document.getElementById("input_content").value=input;
})