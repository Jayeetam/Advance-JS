var Student = (function() {
    var instances = 0;
    return function(a, b) {
       this.a = a;
       this.b = b;
       instances++;

       Student.prototype.instances = function() {
           return instances;
       }
    };
});

var obj1 = new Student("Arnab", 12);
var obj2 = new Student("Arushi", 16);
var obj3 = new Student("Beagle", 14);
var obj4 = new Student("Snowy",15);