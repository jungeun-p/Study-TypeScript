// function logMessage(value: any){
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);

var seho: string | number | boolean; 

function logMessage(value: string|number){
    console.log(value);
    if(typeof value==='number'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100)

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person){
    someone.name;
}

askSomeone({name: 'developer', skill:'backend'});
askSomeone({name:'kim', age:100});

var seho: string | number | boolean; 
var seho: string & number & boolean; // string, number, boolean 모두 만족해야 한다.

// function askSomeone(someone: Developer & Person){
//     someone.name;
//     someone.skill;
//     someone.age;
// }

// askSomeone({name: 'developer', skill:'backend'});
// askSomeone({name:'kim', age:100});




