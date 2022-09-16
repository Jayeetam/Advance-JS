var obj = {num:2}
var addition = function(a,b,c){

	return this.num+a+b+c;
};

var bound = addition.bind(obj);

console.log(bound(1,2,3));