// Lesson1: simplifying process of writing functions
function add10(num){
    return num+10;
}
console.log(add10(5));

const add2 = (num) => num+2;    // one liner functions
console.log(add2(20));

const mult = (num1, num2) => num1*num2;
console.log(mult(10,20));


// Lesson2: accessing parent object parameters using this keyword
const car = {
    color: 'red',
    drive: function() {
        const inner = function () {
            console.log(this);
        }
        inner();
    },
    honk: function(){
        const inner = () => {
            console.log(this);
        }
        inner();
    }
}

car.drive();    // default function implementation doesn't allow accessing object parameters via this keyword
car.honk();     // arrow function does allow accessing internal parameters
