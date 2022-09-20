function Student(n, a, m, p) {
  this.name = n;
  this.age = a;
  this.marks = m;
  this.phoneNumber = p;
  
  this.printDetails = function() {
    console.log('Name: ' + this.name + ' Age:' +  this.age + ' Marks: ' + this.marks + ' PhoneNumber: '+this.phoneNumber);
  }
}

var student1 = new Student('Arnab', 21, [70, 92, 84], 9876321454);
student1.printDetails();