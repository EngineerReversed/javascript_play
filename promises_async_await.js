// Lesson1: Synchronous functions are executed first and then asynchronous functions are executed
// Lesson2: Asynchronous functions are queued in event loop for execution

let hey = "hey anshu";
console.log(hey);

setTimeout(()=> {
    console.log('baby');
}, 1);

setTimeout(()=> console.log('yolo'),0);

console.log('there');