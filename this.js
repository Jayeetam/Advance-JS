//'this' inside global scope



this.table = 'window table';

console.log(window.table);

this.garage = {

	table: 'garage table'

};

this.garage.table;

window.garage.table;



//'this' inside an object



let johnsRoom = {

	table: 'johns table'

};

console.log(this.johnsRoom.table);



//'this' inside a method



this.table = 'window table';



this.garage = {

	table: 'garage table' ,

	cleanTable() {

		console.log(`cleaning ${this.table}`)

	}

};



let johnsRoom = {

	table: 'johns table'

	cleanTable() {

		console.log(`cleaning ${this.table}`)

	}

};



johnsRoom.cleanTable();

this.garage.cleanTable();



//'this' inside a function



//1.

'use strict';

this.table = 'window table' ;

const cleanTable = function(){

	console.log(`cleaning ${this.table}`);

};

cleanTable.call(this);



//2.

'use strict' ;

this.table = 'window table' ;

const cleanTable = function(soap){

	console.log(`cleaning ${this.table} using ${soap}`);

};

cleanTable.call(this, 'some soap');



//3.

'use strict' ;

this.table = 'window table' ;

const cleanTable = function(soap){

	console.log(`cleaning ${this.table} using ${soap}`);

};

this.garage = {

	table: 'garage table' 

};

let johnsRoom = {

	table: 'johns table'

}

cleanTable.call(this, 'some soap');

cleanTable.call(this.garage, 'some soap');

cleanTable.call(johnsRoom, 'some soap');



//'this' inside an inner function



//1.

'use strict' ;

this.table = 'window table' ;

const cleanTable = function(soap){

	let that = this;

	const innerFunction = function(_soap){

		console.log(`cleaning ${that.table} using ${soap}`);

		}

		innerFunction(soap);

};

this.garage = {

table: 'garage table'

};

let johnsRoom = {

table: 'johns table'

}

cleanTable.call(this, 'some soap');

cleanTable.call(this.garage, 'some soap');

cleanTable.call(johnsRoom, 'some soap');



//2.

'use strict' ;

this.table = 'window table' ;

const cleanTable = function(soap){

const innerFunction = function(_soap){

console.log(`cleaning ${this.table} using ${soap}`);

}

innerFunction.call(this,soap);

};

this.garage = {

table: 'garage table'

};

let johnsRoom = {

table: 'johns table'

}

cleanTable.call(this, 'some soap');

cleanTable.call(this.garage, 'some soap');

cleanTable.call(johnsRoom, 'some soap');





//3.

'use strict' ;

this.table = 'window table' ;

const cleanTable = function(soap){

const innerFunction =function (_soap){

console.log(`cleaning ${this.table} using ${soap}`);

}

innerFunction.bind(this)(soap);

};

this.garage = {

table: 'garage table'

};

let johnsRoom = {

table: 'johns table'

}

cleanTable.call(this, 'some soap');

cleanTable.call(this.garage, 'some soap');

cleanTable.call(johnsRoom, 'some soap');





//4.

'use strict' ;

this.table = 'window table' ;

const cleanTable = function(soap){

const innerFunction = (_soap) => {

console.log(`cleaning ${this.table} using ${soap}`);

}

innerFunction(soap);

};

this.garage = {

table: 'garage table'

};

let johnsRoom = {

table: 'johns table'

}

cleanTable.call(this, 'some soap');

cleanTable.call(this.garage, 'some soap');

cleanTable.call(johnsRoom, 'some soap');





//'this' inside a constructor



//1.

'use strict' ;

this.table = 'window table' ;

const cleanTable = function(soap){

console.log(`cleaning ${this.table} using ${soap}`);

}

this.garage = {

table: 'garage table'

};

let createRoom = function(name){

	this.table = `${name}s table`

}



const jillsRoom = new createRoom('jill');

const johnsRoom = new createRoom('john')



cleanTable.call(this, 'some soap');

cleanTable.call(this.garage, 'some soap');

cleanTable.call(johnsRoom, 'some soap');



//2.



'use strict' ;

this.table = 'window table' ;



this.garage = {

table: 'garage table'

};

let createRoom = function(name){

this.table = `${name}s table`

}



createRoom.prototype.cleanTable = function(soap){

	console.log(`cleaning ${this.table} using ${soap}`);

}



const jillsRoom = new createRoom('jill');

const johnsRoom = new createRoom('john')



jillsRoom.cleanTable('some soap');

johnsRoom.cleanTable('some soap');





///'this' inside a class



'use strict' ;

this.table = 'window table' ;



this.garage = {

table: 'garage table'

};

class createRoom {

constructor(name){

this.table = `${name}s table`

}



cleanTable(soap){

	console.log(`cleaning ${this.table} using ${soap}`);

}



const jillsRoom = new createRoom('jill');

const johnsRoom = new createRoom('john')



jillsRoom.cleanTable('some soap');

johnsRoom.cleanTable('some soap');

