// function fetchItems(){
//     var items = ['a', 'b', 'c'];
//     return items;
// }
// fetchItems();
// let result = fetchItems();
// console.log(result) // string[]
// return 타입을 선언하지 않더라도 자동으로 string의 배열이 된다고 추론 가능하다. 

function fetchItems(): Promise<string[]>{
    var items: string[] = ['a', 'b', 'c'];
    return new Promise(function(resolve){
        resolve(items)
    });
}

fetchItems();