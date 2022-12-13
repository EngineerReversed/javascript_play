// var is global as compared to let(local) and const
let a = "a";
var b = "b";
const c = "c";

console.log('start');
console.log(a,b,c);

if(true){
    let a = 2;
    var b = 3;
    const c = 4;
    console.log('inside true');
    console.log(this.a,this.b,this.c);
}

console.log('parent');
console.log(a,b,c);

{
    let a = 7;
    var b = 8;
    const c = 9;
    console.log('inside struct');
    console.log(this.a,this.b,this.c);

}
console.log(a,b,c);
console.log(this.a,this.b,this.c);

// how var being not scope safe may cause problems?
// check this example where for loop value updates the index
// solution would be to use let instead of var in for loop
var index= 13;
console.log('value of index before: '+index);
for(var index=0;index<4; index++){
    console.log("value of index now: "+index)
}
console.log(index);

console.log(aVAR);    // undefined value instead of throwing declaration syntax error

// Lesson 4: var value is added to window object by default but not let
var aVAR = 'var_value';
let aLET = 'let_value';
console.log(window.aVAR);
console.log(window.aLET);


