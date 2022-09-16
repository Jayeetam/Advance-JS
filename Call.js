var obj = {num:2};

var addition = function(a){

return this.num+a;

};

console.log(addition.call(obj,3));

