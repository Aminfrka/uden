// let maximum = prompt("Enter your maximum number here.");

// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number, please."));
// }
// let guess = parseInt(prompt("Enter your guess here."));

// const secretNum = parseInt(Math.floor(Math.random() * maximum) + 1);

// while (true) {
//   guess = parseInt(prompt("Enter your guess here."));
//   if (guess === secretNum) break;

//   if (guess < secretNum) {
//     console.log(`your guess is less than the secret number`);
//   } else {
//     console.log("Your guess is great than the secret number");
//   }

// }

// console.log("Well done !!");

// let names = ['Amin', 'Amata', 'Ziyad', 'Khadija', 'Ali'];

// for (name of names) {
//   console.log(name)
// }



// for (let names in testScores) {
//   console.log(names)
// }
// let total = 0;
// let scores = Object.values(testScores);

// for (let score of scores) {
//   total += score;
// }

// let aver = total / scores.length;

// console.log(aver);

// const testScores = {
//   Amin: 21,
//   Amata: 20,
//   ziyad: 19,
//   Khadija: 18
// }

// for (let names in testScores) {
//   console.log(`keys ${names} and the values ${testScores[names]}`);
// }

// let maximum = prompt("Enter your maximum number here.");

// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number, please."));
// }
// let guess = parseInt(prompt("Enter your guess here."));

// const secretNum = parseInt(Math.floor(Math.random() * maximum) + 1);

// while (true) {
//   guess = parseInt(prompt("Enter your guess here."));
//   if (guess === secretNum) break;

//   if (guess < secretNum) {
//     console.log(`your guess is less than the secret number`);
//   } else {
//     console.log("Your guess is great than the secret number");
//   }

// }

// console.log("Well done !!");


// ==================================================

// let contact = {
//   firstName: 'John',
//   lastName: 'Doe',
//   email: 'john.doe@example.com',
//   phone: '(408)-555-9999',
//   address: {
//       building: '4000',
//       street: 'North 1st street',
//       city: 'San Jose',
//       state: 'CA',
//       country: 'USA'
//   }
// }

// let contact = {
//   firstName: 'John',
//   lastName: 'Doe',
//   email: 'john.doe@example.com',
//   address: {
//     building: '4000',
//     street: 'North 1st street',
//     city: 'CA',
//     country: 'USA'
//   }
// }

// contact.address.tel = "020 - XXXXXX - XXXX"
// console.log(contact.email)


// function download(url, success, failure) {
//   setTimeout(() => {
//     console.log(`downloading ${url} .....`);

//     let error = url.length === 0 || !url;
//     if (error) {
//       failure(url);
//     } else {
//       success(url);
//     }
//   }, 3000);
// }

// function process(picture) {
//   console.log(`Processing ${picture}....`)
// }

// function success(picture) {
//   console.log(`Processing the picture ${url}`)
// }

// function failure(picture) {
//   console.log(`Handling error....`);
// }

// let url = "http://pic.com/downloading"

// download(url, success, failure);
// // process(url);

// function download(url, process) {
//   setTimeout(() => {
//     console.log(`downloading ${url}....`);

//     process(url);
//   }, 3000);
// }

// let url1 = "https://one.com/1";
// let url2 = "https://two.com/1";
// let url3 = "https://three.com/1";


// download(url1, function (pic) {
//   console.log(`processing ${pic}`);

//   download(url2, function (pic) {
//     console.log(`d${pic}`);

//     download(url3, function (pic) {
//       console.log(`downloading ${pic}`);
//     })
//   })
// })

// let name = {
//   firstName: 'Amin',
//   lastName: 'Alhassan'
// }

// name.firstName = "Amata";
// name.lastName = "Amin";
// name.age = 23;

// delete name.lastName;

// console.log(name);

// let name = {
//   lastName = "Amin",
//   firstName = "Alhassan",
//   fullName: function () {
//     return lastName + " " + firstName
//   }
// }

// console.log(name.fullName);

// let person = {
//   name: "Amin",
//   role: "Engineer"
// }


// person.greeting = function () {
//   console.log("Hello, world")
// }
// person.greeting();

// let person = {
//   firstName: 'Amin',
//   lastName: 'Alhassan'
// };

// Object.defineProperty(person, 'fullName', {
//   get: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set: function (value) {
//     let parts = value.split(' ');
//     if (parts == 2) {
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     } else {
//       throw 'invalid name format';
//     }
//   }
// });

// console.log(person.fullName)



// let products = {};

// Object.defineProperties(products, {
//   name: {
//     value: 'Iphone'
//   },
//   price: {
//     value: 1100
//   },
//   tax: {
//     value: 0.1
//   },
//   netPrice: {
//     get: function () {
//       return this.price - (1 + this.tax);
//     }
//   }
// })

// let descriptor = Object.getOwnPropertyDescriptor(products, 'name');


// console.log(descriptor);

// let person = {
//   firstName: 'Amin',
//   lastName: 'Alhassan'
// };

// function Person(firstName, lastName) {
//   if (!new.target) {
//     throw error("you cann't use the constructor without the new operator")
//   }

//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// let personOne = Person('Amin', 'Alhassan');

// console.log(personOne);

// function Person(name) {

//   if (!new.target) {
//     console.log("dont forget the new operator")
//   }
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   return "Hi, I'm " + this.name + "!";
// }

// Person.prototype.fullName = function () {
//   return this.name + " " + "Alhassan";
// }

// let p1 = new Person("Amin");
// let p2 = new Person("Jane");

// p1.draw = function () {
//   return "I made it easy!!";
// }

// // console.log(p1.fullName());

// console.log(p1.__proto__ === Person.prototype)

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// }

// let p1 = new Person('Amin', 'Alhassan');
// console.log(p1.getFullName());

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// let p1 = new Person("Amin", "Alhassan");

// console.log(p1.getFullName());

// class products {
//   constructor(name, price, tax) {
//     this.name = name;
//     this.price = price;
//     this.tax = tax;
//   }

//   getNet() {
//     return this.price * (1 + this.tax);
//   }
// }

// let p1 = new products('iphone 13', 1200, 10);
// console.log(p1.getNet())

// let person = {
//   name: "Amin Alhassan",
//   greet: function () {
//     return "Hi, I'm " + this.name;
//   }
// };
// let teacher = Object.create(person, {
//   id: {
//     value: "1233"
//   },
//   role: {
//     value: "head teacher"
//   }
// })

// teacher.teach = function (subject) {
//   return "Hi, I teach " + subject;
// }


// console.log(teacher.role);


// let car = {
//   brand: "Honda",
//   getBrand: function () {
//     return this.brand;
//   }
// }

// let bike = {
//   brand: "Harley Davidson"
// }

// let brand = car.getBrand;

// console.log(brand.bind(bike));
