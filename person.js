class Person { // class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    data = 10;
    getDetails() {
        let data = 100;
        return `Person name is ${this.name} and is of age ${this.age} ${this.data}`;
    }
}

let pavan = new Person("Pavan Patil", 22); // Object

console.log(pavan.getDetails());

// Inheritance extends

class Student extends Person {
    constructor(name, age, standard) {
        super(name, age);
        this.standard = standard;
    }

    study() {
        return `Person name is ${this.name} and is of age ${this.age} and studying in ${this.standard} grade`;
    }
}


let bipul = new Student("Bipul Kumar", 22, "BE-6th"); // Object


// console.log(bipul.study());
console.log(bipul.getDetails());


class BankAccount {
    constructor(balance) {
        let _balance = balance;
        this.withdraw = (amount) => {
            _balance -= amount;
        }
        this.deposit = (amount) => {
            _balance += amount;
            return _balance;
        }

        this.getBalance = () => { return _balance }
    }
}

let bankAcc1 = new BankAccount(100000);
console.log(bankAcc1.getBalance())


// function add(a, b) {
//     return a + b;
// }


// function add(a, b, c) {
//     return a + b + c;
// }

// function add(a) {
//     return a;
// }

// console.log(add(2, 3, 4))

// Polymorphism
class Animal {
    makeSound() {
        console.log("This is Animal")
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("This is Dog")
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("This is Cat")
    }
}

class SmallCat extends Cat {
    makeSound() {
        console.log("This is Small Cat")
    }
}

class Lion extends Animal {

}

let lion = new Lion()
lion.makeSound();


let sc = new SmallCat()
sc.makeSound();

// 