//MAKING API request
//FETCH()
//SPECIFYING 
//fetch("./data.txt").then(function(rez){
    //return rez.text()
//}).then(function(data){
   // console.log(data)
//})

//fetch("./data.json").then(function(riz){
    //return riz.text()
//}).then(function(data){
   // console.log(data)
//})
//let h1= document.querySelector("h1")
//let img= document.querySelector("img")

//COMMUNICATING WITH EXTERNAL API
//fetch("https://jsonplaceholder.typicode.com/photos").then(function (uix){
    //return uix.json()
//}).then(function(data){
    //img.src = data[0].url
    //console.log(data[0].title)
//}) 
// ASYNC AWAIT
async function getData() {
    let req= await fetch("./data.txt");
    let data = await req.text();
    console.log(data);
}
getData();