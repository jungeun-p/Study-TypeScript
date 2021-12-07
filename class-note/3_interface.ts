interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho: User ={
    age:33,
    name:'seho'
}
// 함수에 인터페이스 활용
function getUser(user: User){
    console.log(user)
}
const capt = {
    name:'cap',
    age:100,
}
getUser(capt);

// 함수의 스펙에 인터페이스 활용 
interface sumFunction {
    (a: number, b: number): number;
}

let sum: sumFunction;
sum = function(a: number, b:number): number{
    return a+b;
}

// 인덱싱
interface StringArray {
    [index: number]: string; // index, 값 선언. 
}
 var arr: StringArray = ['a', 'b', 'c'];
 arr[0]; // 'a'

 // 딕셔너리 패턴 
 interface StringRegexDictionary {
     [key: string]: RegExp // 정규표현식 생성자
 }

 var obj: StringRegexDictionary = {
     // sth: /abc/,
     cssFile: /abc/
 }
 Object.keys(obj).forEach(function(value){})

 // 인터페이스 확장 
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    // name: string;
    // age: number;
    language: string;
}

var captin: Developer = {
    name:'hi',
    age:12,
    language:'hi',
}