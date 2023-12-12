//COMPARISON OR CONDITIONAL 0R RELATIONAL OPERATORS
let num1=30;
let num2=50;
console.log(num1>num2)
console.log(num1<num2)
console.log(num2==num2)
num1="30"
num2=30
console.log(num1===num1);
console.log(num1!=num2);

//LOGICAL OPERATORS
//AND &&
console.log(num1>10 && num1<50)

// OR ||
console.log(num1 == "XAE" || num1== 30)

//NOT !
const age= num1>18;
console.log(!age);

//ASSISIGNMENT OPERATORS
let fname="Aires";

//COMPOUND OPERATORS
fname = fname +"company";
fname+="company";


//PRECEDENCE ORDER
console.log(4+3*2)
console.log((4*3)*5);

//REGULAR EXPRESSION
let exp1 =/XAE9/
let  exp2= new RegExp("XAE9")
//TESTING IF PATTERN MATCHES
console.log(exp1.test("XAE9"))
//POSITING MATCHING CHARACTERS
exp1=/^X/
console.log(exp1.test("XnD1"))
exp1=/a$/
console.log(exp1.test("XfZa"))
//CHARACTER CLASS CHARACTERS
exp1=/[def]XdE/
console.log(exp1.test("eXdE"))
exp1=/[a-z][A-Z][0-9]/
console.log(exp1.test("XaE9"))
exp1=/\d\D\w/
console.log=(exp1.test("1dx"))





