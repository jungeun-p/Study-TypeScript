
// function logText(text){
//     console.log(text);
//     return text;
// }
// logText(10); // number 10
// logText('hi') // string hi
// logText(true); // boolean true 

// 함수 호출 시 
// function logText<T>(text:T): T{
//     console.log(text);
//     return text;
// }
// logText('10');
// logText<string>('hi');

// function logText(text: string | number){
//     console.log(text);
//     return text;
// }

// <T> : generic 사용 선언
// T : 파라미터의 타입
// T : return 타입
function logText<T>(text: T): T{
    console.log(text);
    return text;
}

const str = logText<string>('a'); // stringd이란 타입을 호출 할 때 사용 하겠다. 
const flag = logText<boolean>(true);
logText(10); 

// generics 타입 제한 
function logTextLength<T>(text: T[]): T[]{ // T는 배열이기 때문에 length 제공
    console.log(text.length);
    text.forEach(text=>{
        console.log(text);
    })
    return text;
}
logTextLength<string>(['hi']);

// keyof
interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(false);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');




