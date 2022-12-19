// Lesson1: Synchronous functions are executed first and then asynchronous functions are executed
// Lesson2: Asynchronous functions are queued in event loop for execution

let hey = "hey anshu";
console.log(hey);

const yolo_func = () => console.log('yolo');
setTimeout(yolo_func, 0);

setTimeout(() => {
    console.log('baby');
}, 1);

console.log('there');

// Lesson3: using Promise, then and catch keywords you can write call back functions
// Also helpful in writing lots of if-else functionalities given certain events
const buyIceCream = (amount = 5) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (amount < 3) {
                reject('Not enough money to buy ice-cream');
            }
            else {
                resolve('I bought an ice-cream');
            }
        }, 0);
    });
};

buyIceCream(4)
.then((response)=>{
    console.log(response);
    return 'It tastes good!';
})
.then((response)=>{console.log(response)})
.catch((error)=>{console.log(error)});

// Lesson4: async to avoid writing timeout function
// await works only with async

let amount1= 10;
let amount2= 20;
const buyIceCream2 = async function(amount=5){
    if(amount<4){
        throw new Error('Unable to buy ice-cream with amount: '+amount);
    }
    else{
        return 'I bought the ice-cream with amount: '+amount;
    }
};

console.log(0);

// buyIceCream2(amount1).then((response)=>{
//     console.log(response);
// })
// .catch((error)=>console.log(error));

console.log(0.5);
async function check_main(){
    console.log(1);
    const result = await buyIceCream2(amount2);
    console.log(result);
    console.log(2);
}

console.log('end');

check_main()
.then((response)=>console.log(response))
.catch((error)=>console.log(error));

// Callback implementation using async and await
// Neat implementation for callback as compared to callback hell

buyIceCream2(amount1)
.then((response)=> {
    console.log(response);
    return buyIceCream2(amount2);
})
.then((response)=>{
    console.log(response);
    return buyIceCream2(amount1);
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>console.log(error));
