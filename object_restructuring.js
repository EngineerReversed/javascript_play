// Object destructuring
// Unpacking objects to values

const obj = {
    brand: 'toyota',
    color: 'red',
    horn: 'popon'
}

const {brand, color, horn: sound} = obj;    // you can give different name to variable
console.log(brand);
console.log(color);
console.log(sound);

// array destructuring
 const arr = [1,2,3,4];

 let [first, second, ...third] = arr;
 console.log(first);
 console.log(second);
 console.log(third);

 [first, second] = [second, first];

 let a =1;
 let b = 2;
 // swapping elements without third variable
 [a, b] = [b, a];
 console.log(a);
 console.log(b);