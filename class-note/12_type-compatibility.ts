interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    skill: string;
    stack: number;
}

// class Person {
//     name: string;
// }

var developer: Developer;
var person: Person;

developer = person; // 오른쪽의 타입이 구조적으로 더 커야 호환이 가능하다. 


// 함수
var add = function (a: number){
    // ...
}

var sum = function(a: number, b: number){
    // ...
}

// parameter 범위 크기에 따라서 허용이 가능해진다. 
sum = add; 
// add = sum; 

// generic 
interface Empty<T>{
    // ...
}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
    data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

// notempty1 = notempty2; // 호환 불가 