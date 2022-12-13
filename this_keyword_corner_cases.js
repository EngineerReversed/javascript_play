// Lesson 1: this keyword represents context of the object 
const car = {
    object_type: 'transport',
    model: 'toyota',
    drive: function () {
        console.log(this);
    }
}

car.drive();    // context here is of car object and therfore this keyword works

// boom context isn't able to access parameters of car object
const boom = car.drive;
boom();

// if we assign object or executed parameters directly instead of function, it would work
const dhadam = car.drive();
const dhoom = car;
dhadam;
dhoom.drive();

// Lesson 2: this keyword is helpful in getting object parameters in a context

const toad = {
    xPos: 0,
    yPos: 0,
    moveLeft: function (unit) {
        this.xPos -= unit;
    },
    movRight: function(unit){
        this.xPos += unit;
    },
    movTop: function(unit){
        this.yPos -= unit;
    },
    movBottom: function(unit){
        this.yPos += unit;
    },
    inner: function(){
        console.log(this);
    },
    getCurrentPosition: function(){
        console.log(this.xPos, this.yPos);
    }

}

// Get position before and after 
toad.getCurrentPosition();
toad.moveLeft(100);
toad.getCurrentPosition();