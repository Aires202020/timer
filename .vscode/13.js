let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
//CHANGING COLOR OF A RECTANGLE
context.fillStyle= "lime"
//DRAWING A RECTANGLE
context.fillRect(30,40,50,50);
//DRAWING STROKED RECTANGLE
//CHANGING STROKED RECTANGLE COLOR
context.strokeStyle ="gold"
//DRAWING STROKED RECTANGLE
context.strokeRect(80,40,30,30)
//DRAWING LINES
context.beginPath();
context.moveTo(30, 40)
context.lineTo(30,100)
context.lineWidth=10
context.strokeStyle="black"
context.stroke()
//DRAWING CIRCLES
context.arc(200,40,40,0,2*Math.PI,false)
context.fill()
//STORAGE
//SESSION-STORAGE
//CREATING SESSION
sessionStorage.setItem("User","Alfred")
//GETTING VAULE FROM SESSION
let user= sessionStorage.getItem("User");
console.log(user) 
//REMOVING SESSION
// sessionStorage.setItem("User");
//CLEAR SESSION
sessionStorage.clear()
//STARTING MULTIPLE VAULES
let userdetails={
    name:"Fred",
    age:24,
    DOB:"May 1st 1999"
}
sessionStorage.setItem("details", JSON.stringify(userdetails));
let details = JSON.parse(sessionStorage.getItem("details"));
console.log(details);
//COMPARING LOCAL STORAGE AND SESSION STORAGE
document.querySelector("button").onclick=function(){
    sessionStorage.setItem("sessionUser","Alfred");
    localStorage.setItem("localuser","Alfred");
}
