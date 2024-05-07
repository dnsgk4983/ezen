// 1. 함수는 아래처럼 같은 기능을 3가지 방식으로 나타낼 수 있습니다.
// 함수 정의식은 함수의 정의 전 실행 명령이 가능하도록
// 호이스팅이 적용되고 (hoisting)
// 아래 두 함수는 함수를 정의하기 전 사용할 수 없습니다.
// 특히 화살표 함수는 자바스크립트 ES6 이상 지원하는
// 모던 자바스크립트용 용법입니다.

// 함수 정의식
function hello1() {
    console.log("hi");
}
hello1();
// 함수 표현식
// 함수의 기능 전체를 특정 변수에 담는 방식입니다.
// 지금 방식은 함수의 이름 자체는 생략 가능합니다.
// let hello1 = function() {
//     console.log("hi");
// }

// 화살표함수
// 화살표 표시로 좀 더 간편하게 아래 기능이 함수
// 기반인 것을 나타냅니다. 역시 이름이 생략가능합니다.
// let hello1 = () => {
//     console.log("hi");
// }

// 객체 데이터입니다.
// name : "구월동", age: 33 두개의 프로퍼티로 이루어졌습니다.
// key & value 데이터 쌍의 단위를 "프로퍼티" 라고 합니다.
let person = {
    name: "구월동",
    age: 33
}

// 객체 데이터 호출은 2가지 방식이 있습니다.
// 동네 이름을 호출 할 때
const townName = person.name;
const townName2 = person["name"];

let person2 = {
    name: {
        oldname1: "구월동",
        newname1: "구월로데오"
    },
    age: 33
}

console.log(person2.name.newname1);
person2.name.newname3 = "인천시청 옆";
console.log(person2.name.newname3);

// 자바스크립트에서 객체타령하는이유
// a.k.a 왜 mongoDB가 주목받는가??????? (NoSQL = not only sql)
// 객체 데이터셋은 단순 데이터 값이 아닌 함수 전체도 담을 수 있다
// 반면 sql은 데이터 값 자체만 담을 수 있다 
let person3 = {
    name: {oldname1: "구월동",
            newname1: function() {
                console.log(555 + 777);
            }
    },
    age: 33
    }
console.log(person3.name.newname1)

// 객체의 구조분해 할당
// const MongoClient = require('mongodb');
// const { MongoClient, ServerApiVersion } = require('mongodb');
let person4 = {
    name: {
        oldname1: "구월동",
        newname1: function() {
            console.log(555 + 777);
        }
    },
    age: 33
}

let {name, age} = person4;
console.log(name, age);
// 지금 사용한 중괄호는 객체 내부의 원하는 일부 데이터를
// 분해하여 원하는 변수에 할당한 것이다.

// 스프레드 연산자
// 배열과 객체같이 반복가능한 값을 분리합니다.
let arr1 = [1, 2, 3];
let arr2 = [...arr1,4,5,6,7,8,]
let arr3 = [arr1,4,5,6,7,8,]
console.log(arr2);
console.log(arr3);

// 날짜 처리
// 날짜 객체 만들어서 처리
// 변하지 않는 데이터는 전부 대문자
// 객체는 첫글자 대문자
// 일반 변수는 전부 소문자
let today1 = new Date(0);
console.log(today1);
// 자바스크립트는 1/1000 초 단위입니다.
// 자바스크립트 날짜는 1970년 1월 1일 오전9시에서 시작합니다.
let today2 = new Date(24 * 3600 * 1000);
console.log(today2);

// 내가 원하는 날짜를 선언한다면?
let today3 = new Date(2024, 4, 3);
console.log(today3);

// 리액트는 왜 나왔는가?
// 페이지의 공통된 내용을 한번에 변경하려면?
// 태그로 정의하기엔 애매한데 유사한 페이지 컨텐츠가 가득하다면?
// --> 태그 html을 함수화해서 재활용하고
// 그 함수를 수정하면 수십수백만줄 코드가 수정되지 않을까?
// --> 컴포넌트 베이스 소스프로그램