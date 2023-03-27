let btn=document.getElementById("btn");
let head=document.getElementById("head");

let text=["Hello","World"];
let count=1;

btn.addEventListener('click',()=>{
    head.innerHTML=text[count];
    if(count) count=0;
    else if(!count) count=1;
})

btn.addEventListener('mouseover',()=>{
    head.style.color="red";
})

btn.addEventListener('mouseout',()=>{
    head.style.color="blueviolet";
})

