"use strict";

//var getA = function(a){
   // return a;
//};

let getA = a => a;
console.log(getA(1));

let square = a => a*a;
console.log(square(4));

let square2 = (a) => {return a*a};
console.log(square2(4));


var a = 5
let square3 = () => {return a*a};
console.log(square3());

var a = 6
let square4 = _ => {return a*a};
console.log(square4());

let multi = (a,b) => {return a*b};
console.log(multi(2,4));

var x = function(){
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val)
    }, 1)
};
var xy = new x();

var x = (...n) => {
    console.log(n[0])
};
x(1,2,3);

