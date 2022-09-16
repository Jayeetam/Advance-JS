var obj = {num:2};

var addition = function(a,b,c){

return this.num+a+b+c;

};

console.log(addition.call(obj,3,2,4));