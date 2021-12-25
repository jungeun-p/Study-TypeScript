interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name:'Tony', age:33, skill: 'Iron Making' }
}

var tony = introduce();
console.log(tony.name); // union type은 type들의 공통된 속성만 접근이 가능.

// 타입의 범위 구체화 시키고 줄여 나가기
if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age){
    var age = (tony as Person).age;
    console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined; // skill이 존재할 때 

}

if(isDeveloper(tony)){
    tony.skill
} else {
    tony.age
}