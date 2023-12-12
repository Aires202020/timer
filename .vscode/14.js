//MATHS METHODS/PROPERTIES
console.log(Math.P)
//GETTING MINIMUM NUMBER
console.log(Math.min(10,4,8,2,30))
//GETTING MAXIMUM NUMBER
console.log(Math.max(10,4,8,2,30))
//GETTNG SQUAREROOT OF A NUMBER
console.log(Math.sqrt(256))
//RETURN POWER
console.log(Math.pow(2,3))
//TELLS IF A NUMBER IS POSITIVE OR NEGATIVE
console.log(Math.sign(-16))
//ROUNDING NUMBERS
console.log(Math.round(12.75))
console.log(Math.round(12.75))
console.log(Math.floor(12.75))
console.log(Math.floor(12.75))
console.log(Math.ceil(12.75))
console.log(Math.ceil(12.75))
//GENERATING RANDOM NUMBERS
console.log(Math.floor(Math.random()* 10)+1)
console.clear()
//DATE OBJECT
let date = new Date();
//GET YEAR
console.log(date.getFullYear())
const  months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
console.log(months[date.getMonth()]);
// GET DAY
const days =["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
console.log(date.getDate())
//GETTING TIME
console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`)

console.log(date.toDateString())
console.log(date.toLocaleTimeString())
console.log(date.toLocaleString("en-us",{dateStyle:"long"}));
console.log(date.toLocaleString("ja-jp",{dateStyle:"full"}));
console.log(date.toDateString("fr-FR",{dateStyle:"full"}))
console.log(date.toDateString("ar-EG",{dateStyle:"full"}))

console.log(date.toLocaleString("en-us",{timeStyleStyle:"short",hour12:true}));
//INTERVALS = FUNCTIONS AND TIME
let h1=document.querySelector("h1")
setInterval(function (){
    let newDATE = new Date();
    h1.innerHTML=newDATE.toLocaleString()
},1000)

setTimeout(function(){
    alert("Hello")
})



