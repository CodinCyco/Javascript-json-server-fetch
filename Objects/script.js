function Bird(name,color){
    this.name=name;
    this.color=color;
}


Bird.prototype = {
    constructor: Bird,
    numLegs : 2,
    eat : function () {
        console.log("I'm eating");
    },
    describe : function () {
        console.log("my name is" + this.name);
    }
};
let bird1 = new Bird("Bird one","Yellow");
let bird2 = new Bird("Bird two","Green");
let bird3 = new Bird("Tweety","yellow");

console.log("Constructor : "+bird3.constructor);

let ownProps = [];
let prototypeProps = [];
for (let property in bird1) {
    if(bird1.hasOwnProperty(property))
        ownProps.push(property)
    else
        prototypeProps.push(property);
}

console.log("*********Properties division*********");
console.log("own props :");
ownProps.forEach(function (value) {
    console.log(value);
});
console.log("Prototype props :");

prototypeProps.forEach(function (value) {
    console.log(value);
});

var tab = ["numLegs","sound","name","food","color"];

var Types = Object.getOwnPropertyNames(bird1);
console.log("*********Method one getPropertyNames***********");

tab.forEach(function (value) {
   if(value == Types[1] || value == Types[0] )
       console.log(value);
});

console.log("**********Method two hasOwnProperty**********");


for (let i in tab){
    if(bird1.hasOwnProperty(tab[i]))
        console.log(tab[i]);
}



/////////////////////////////////

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////

//////////////Héritage///////////////////

function Animal(){
};
    Animal.prototype = {
        constructor:Animal,

        eat : function () {
            console.log("i'm eating ");
    }
};

function Cat(name){
    this.name = name;
}
Cat.prototype = Object.create(Animal.prototype);
var cat = new Cat("Tom");
cat.eat("meet");
console.log(cat.name);
////////////////////////////////////
////////////////////////////////////

////////////////////////////////////

////////////////////////////////////

////////////////////////////////////

////////////////////////////////////
function Bird2(){};

Bird2.prototype.fly = function () {
    console.log("i can fly");
}
function Penguin(){};

Penguin.prototype = Object.create(Bird2.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function () {
    console.log("I can't fly");
};

//////////////////////////////////

function calculateAge(date){
    var dif = Date.now() - date.getTime();
    var diff = new Date(dif);
    return Math.abs(diff.getUTCFullYear()-1970);
}

function calculateAge2(date){
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if(month<0)
        age--;
    return age;
}

console.log("************************");
console.log(calculateAge2(new Date(1995,12,16)));

