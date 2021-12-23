// 타입 추론 기본 1
var a = 'abc';

function getB(b=10){
    var c = 'hi';
    return b + c;
}

// // 타입 추론 기본 2
// interface Dropdown<T>{ // value의 type을 가져다 사용 가능. 
//     value:T;
//     title:string;
// }

// // Dropdown interface로 string 전달
// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello',
// } 

// 타입 추론 기본 3
interface Dropdown<T>{ // value의 type을 가져다 사용 가능. 
    value:T;
    title:string;
}

interface DetailDropdown<K> extends Dropdown<K>{ // Dropdown extends를 통해서 K의 타입을 Dropdown으로 전달. 
    description: string;
    tag: K;
    // value,
    // title,
}

var detaildedItem: DetailDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a', 
    tag: 'a'
}

// Dropdown interface로 string 전달
var shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello',
} 

// best common type
let arr1 = [0, 1, null]; // 배열의 타입을 어떻게 지정할까? -> let arr: number[]
let arr2 = [1, 2, true]; // let arr: (number|boolean)[]
let arr3 = [0, 1, true, 'a']; // let arr: (number|boolean|string)[]