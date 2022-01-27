// 함수 선언문
function sum(a, b) {
  return a + b;
}

// 함수 표현식
var sum = function (a, b) {
  return a + b;
};

// ES6 함수 표현식(arrow function)
var sum = (a, b) => {
  return a + b;
};
var sum = (a, b) => a + b;

// typescript 화살표 함수
var sum = (a: number, b: number): number => {
  return a + b;
};
