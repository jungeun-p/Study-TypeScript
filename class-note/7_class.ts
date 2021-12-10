class Person {
    // 최상단에 멤버 변수를 설정.
    // 변수의 유효범위 설정 가능. 
    private name: string;
    public age: number;
    readonly log: string;
    constructor(name: string, age: number, log:string){
        this.name = name;
        this.age = age;
        this.log = log;
    }
}

function App(){
    return <
}