enum Shoes {
    Nike = '나이키',
    Adidas = 'adidas',
    Newbalance = 'newbalacne'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 예제

enum Answer {
    Yes = 'Y',
    No = 'N',
}
function askQuestion(answer: Answer) {
    if(Answer.Yes){
        console.log('yes')
    }
    if(Answer.No){
        console.log('no')
    }

}

askQuestion('예스!');
askQuestion('Y');