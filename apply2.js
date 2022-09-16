var obj = {num:2};

var obj2 = {num:5};

var addition = function(a,b,c){

return this.num+a+b+c;

};

var arr = [3,4,5];

console.log(addition.apply(obj,arr));

console.log(addition.apply(obj2,arr));