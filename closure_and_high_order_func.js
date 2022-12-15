// Lesson1: YOu can use closure and inner functions to decouple complex functions;
// It makes the code more readable and easy to maintain

const main = document.querySelector('main');


function headingFactory(colour) {
    const closure = function (text) {
        const heading = document.createElement('h1');
        heading.setAttribute('style', 'color: ' +colour);
        heading.textContent = text;
        return heading;
    }
    return closure;
}

const createRedHeading = headingFactory('red');
redhead = createRedHeading('hello world in red!');
main.appendChild(redhead);


// function main(){
//     return function(){
//         console.log('testing if it works!')
//     }
// }

