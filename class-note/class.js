// ES2015 (ES6)
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

var catp = new Person("captin", 100);

// class Person {
//   // class 로직
//   // : instance를 생성한다.
//   constructor(name, age) {
//     // 초기화
//     console.log("생성 되었습니다. ");
//     this.name = name;
//     this.age = age;
//   }
// }
var seho = new Person("seho", 30); // 생성 되었습니다.
console.log(seho);

// prototype

var user = { name: "capt", age: 100 };
// var admin = { name: "capt", age: 100, role: "admin" };

var admin = {};
admin.__proto__ = user;
console.log(admin.name);
console.log(admin);

var obj = { a: 10 };
