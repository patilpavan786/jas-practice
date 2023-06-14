// function Car(type, fuelType) {
//     console.log(this)
//     this.type = type;
//     this.fuelType = fuelType;
// }

// let car = new Car("nonconvertible", "diesel")
// car.type;
// car.fuelType;

// function setBrand(brand) {
//     Car.call(this, "convertible", "petrol");
//     this.brand = brand;
//     console.log(`Car details = `, this);
// }

// function definePrice(price) {
//     Car.call(this, "convertible", "diesel");
//     this.price = price;
//     console.log(`Car details = `, this);
// }

// const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);

// function Car(type, fuelType) {
//     console.log(this)
//     this.type = type;
//     this.fuelType = fuelType;
// }

// let car = new Car("nonconvertible", "diesel")
// car.type;
// car.fuelType;

// function setBrand(brand) {
//     Car.apply(this, ["convertible", "petrol"]);
//     this.brand = brand;
//     console.log(`Car details = `, this);
// }

// function definePrice(price) {
//     Car.apply(this, ["convertible", "diesel"]);
//     this.price = price;
//     console.log(`Car details = `, this);
// }

// const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);


let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function () {

        // Here "this" points to nameObj
        console.log(this.name);
    }
}
// PrintName.sayHi()
let HiFun = PrintName.sayHi.bind(nameObj);
HiFun();

PrintName.sayHi.call(nameObj);
PrintName.sayHi.apply(nameObj);
