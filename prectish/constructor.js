
function Person(name, age) {
    this.name = name;  
    this.age = age;    
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new Person("Sonu", 18);
const person2 = new Person("Shivani", 19);


person1.greet();  
person2.greet(); 


