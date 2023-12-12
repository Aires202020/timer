for(let i=1938; i<=2007; i++){

    document.write(`<h1>${i}</h1>`)

}
function dark()
{
    document.body.style.backgroundColor="black";

}

function white()
{
    
    document.body.style.backgroundColor="white";
}

document.onmousemove=(ev)=>{
    let div=document.getElementById("div");
    div.style.right=`${ev.x-25}px`
}