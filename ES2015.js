// Same Keys and Values 

function createInstructor(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName
    }
}

/* Write an ES2015 Version */

function createInstructor(firstName, lastName){
    return {
        firstName, lastName
    }
}

// Computed Property Names 

var favouriteNumber = 42;

var instructor = {
    firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!."

/* Write an ES2015 Version */

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt", 
    [favoriteNumber]: "That is my favorite!",
};


// Object Methods

var instructor = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi!";
    },
    sayBye: function(){
        return this.firstName + "says bye!";
    }
}

/* Write an ES2015 Version */

const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi";
    },
    sayBye(){
        return this.firstName + "says bye!";
    }  
}