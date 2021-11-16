// JS 문자열 선언
// let str = 'hello';

// TS 문자열 선언
let str: string='hello'; 
let num: number = 10;
let arr: Array<number> = [1,2,3]; // 배열 타입에 number만 가능. 
let herose: Array<string>=['Capt', 'Thor', 'Hulk', 10];
let items: number[] = [1,2,3];

// TS 튜플
let address: [string, number]=['gangnam', 1]; // 배열의 특정 index 순서의 타입 정의. 

// TS 객체
let obj:object = {};
// let person:object ={
//     name:'capt',
//     age:100
// };

let person:{name:string, age:number} = {
    name:'jin',
    age:20
};

// TS 진위값
let show:boolean = true;