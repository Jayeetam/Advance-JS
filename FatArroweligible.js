class Student {
    constructor (name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return (minMarks) => {
            if(this.marks > minMarks && this.age > minPlacementAge){
                console.log(this.name + " is ready for placements")
            } else{
                console.log(this.name + " is not ready for placenents")
            
            }
        }
    }
}
const Jayee = new Student('jayee',21,80);
const arnab = new Student('arnab',22,22);

Jayee.setPlacementAge(18)(40);
arnab.setPlacementAge(18)(40);