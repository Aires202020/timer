 let user={
    fullname: "Ike",
    contact: "07088549320",
    username:"Alfrediyk20",
    login:function () {
        console.log(`${this.fullname} just logged in`)
    }
 }
 //ACCESSING PROPERTIES OF AN OBJECT
 console.log(user.fullname)
 //ACCESSING METHODS OF AN OBJECT
 user.login()
 //BROWSER OBJECTS
 //DOCUMENTS
 //DOM
 //CREATE AN ELEMENT
 let h1= document.createElement("h1");
 h1.innerHTML="I am a h1 created in javascript";
 document.body.append(h1)
 document.getElementById("box").append(h1);
 //REMOVING ELEMENTS
 //.h1.remove()
// document.getElementById("box").
// removeChild(h1)
//REPLACE ELEMENTS    
let p = document.createElement("p");
p.innerHTML= "Replace the h1!!!";
document.getElementById("box").replaceChild(p,h1);
//ADDING ATRIBUTES
p.title= "I was added in javascript";
p.id= "text";
p.setAttribute("style", "color:red")
//REMOVING ATTRIBUTES
p.removeAttribute("style");
//SELECTING ELEMENTS
let circles =document.getElementsByClassName("circle")
circles[0].innerHTML="Howdy"
circles[1].innerHTML="Goody"
circles[2].innerHTML="Ooii"
for (let circle of circles){
    circle.style.background= "lime";
    circle.style.marginBottom= "10px";
}
//LOCATION
console.log(window.location)
let button = document.getElementById("btn");
button.onclick = ()=> {
    location.pathname = '/10.html';
//     location.reload()
// location.href="https://instagram.com"
//SENDING USER TO LAST HISTORY
////.back(-1)
history.forward(1)
//history.go(1)
}
let weatherinfo={
    "abuja":{
        "weather": "Rainy",
        "weatherinfo": "GO GET AN UMBRELLA",
    }
}
console.log(weatherinfo)
//SERIALIZATION
 let objectTostring=JSON.stringify
 (weatherinfo)
 console.log(objectTostring);
 //DESERILIZATION
 let stringToobject=JSON.parse(objectTostring)
 console.log(stringToobject)
 // STRING METHODS
 let MyName = "Iyke";
 //LENGTH
 console.log(MyName.length)
 //CHANING CASE
 console.log(MyName.toLowerCase())
 console.log(MyName.toUpperCase())
 //EXTRACTING STRINGS
 MyName= "your name is iyke";
 //SLICE
 console.log (MyName.slice(10))
 console.log(MyName.slice(5,9))
 //SUBSTRING
 console.log(MyName.substring(10))
 //SUBSTR
 console.log(MyName.substr(0,2))
     

