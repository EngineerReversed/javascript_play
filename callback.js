// Lesson1: Callback functions are functions passing functions as parameters
// Callback functions are helpful when designer doesn't know what is the purpose of callback function here

window.addEventListener('click',function(event) {
    
})

budget = 1000;

function shopping(budget, afterShoppingCallback) {
    spent = 100;
    budget = budget - spent;
    budget = afterShoppingCallback(budget);
    return budget;
}

const afterShoppingIcecream = shopping(this.budget, (budget) => {
        ice_cream = 10;
        console.log('Current budget: ' + budget);
        console.log('Eat ice-cream');
        budget = budget - ice_cream;
        return budget;
    });
// console.log('Budget after ice-cream: ' + afterShoppingIcecream);

const afterShoppingMovie = shopping(this.budget, (budget) => {
    movie_tickets = 20;
    console.log('Current budget: ' + budget);
    console.log('Watch movie');
    budget = budget - movie_tickets;
    return budget;
});

console.log(afterShoppingIcecream, afterShoppingMovie);
 
// console.log('Budget after movie: '+ afterShoppingMovie);

// callback hell

// console.log(shopping(1000, function(budget){
//     return shopping(1000, function(budget){
//     })
// }));

