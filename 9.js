function addNum(){
    alert(2+2);
}

let h1 = document.getElementById
("text")
//ADDEVENTLISTENER
h1.addEventListener("click",function()
{
    h1.style.color="green";
}
)
//MOUSE EVENTS
h1.onmouseover=()=>{
    h1.style.color="gold";
}

h1.onmouseout=()=>{
    h1.style.color="red";
}
//KEYBOARD EVENTS
let input=document.getElementById("input");
input.onkeydown= ()=>{
    alert(1)
}
//EVENT OBJECT
input.onkeydown= (ev)=>{
console.log(ev.key) 
}

document.onmousemove=(ev)=>{
    let circle=document.getElementById("circle");
    circle.style.left= `${ev.x-25}px`
    circle.style.top= `${ev.y-25}px`
}

function addEventListener(){
    alert(black);
}

     