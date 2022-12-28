// Lesson1: objects in javascript are defined by reference; they are not separate by value

const car1 = {
    colour: 'blue'
}

const car2 = car1;

car2.colour = 'red';

console.log(car2);

const cloned = Object.assign({}, car1);     // it helps in copying by value
cloned.colour = 'gray';

console.log(car1);
console.log(car2);
console.log(cloned);

// Lesson2: spread operator usage for copying objects by value
const cloned2 = {...car1};  // triple dot helps in unpacking object and its values
cloned2.colour = 'green';

console.log(car1);
console.log(cloned2);

// it is majorly used in unpacking arrays
const arr1 = ['hey', 'there','you'];
console.log(...arr1);
console.log('hey', 'there', 'you');

const arr2 = ['Abhishek', 'Shakya'];
const arr3 = ['Pulkit', 'Shakya'];
const arr4 = [...arr2,...arr3];
console.log(arr4);

// spread operator can be used to unpack objects
const obj1 = {
    hey: 'you',
    kaisan: 'wa'
}

const obj2 = {
    hey: 'baby',
    theek: 'wa'
}

const obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3);

function add(...nums){
    console.log(nums);
    let sum = 0;
    for(let index=0; index<nums.length;index++){
        sum+=nums[index];
    }
    console.log(sum);
    return sum;
}
add(1,2,3,4,5,6);
