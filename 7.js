//JUMP STATEMENT
//CONTINUE
for(let i=1; i<=10;i++) {
    if(i==8){
        continue;
    }
    document.write(`<h1>${i}</h1>`)
}

//BREAK
for(let i=1; i <=10;i++){
    if(i==4){
        break;
    }
    document.write(`<h1>${i}</h1>`)
}

//ARRAYS
  const igbonames=['ike','ekene','ada','amaka'];
  console.log(igbonames[1],igbonames[0]);
  //SINGLE IS THE SAME AS ARRAY
  let film=['lego', 'batman'];
  //MULTI DIMENSIONAL ARRAYS
  let sports =[[]]