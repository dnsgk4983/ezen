// 데이터 자료형이 두가지로 구분됩니다.
// 일반 자료형: 문자나 숫자 ---> 값 자체가 복사됨 (깊은복사)
// 참조 자료형: 객체 ---> 값 자체 말고 값이 들어있는 메모리 주소가 복사됨 (얕은복사)

// 값 자체가 복사됨 (깊은복사) ---> 복사 이후엔 원 데이터 값이 달라져도 문제없음
// 메모리 주소가 복사됨 (얕은복사) ---> 복사해준 원 데이터 값이 바뀌면 덩달아 바뀜

// 자바 & 파이썬 ---> 깊은 복사는 메모리 주소가 달라짐 + 독립적이라 표현
// 얕은 복사는 메모리 주소가 같다. + 독립적이지 않음
const person = {
  name: "Hong Gildong",
};

// 객체는 참조 자료형이므로 메모리 주소를 복사했기 때문에
// 데이터를 바꾸면 같은 주소에 있는 데이터가 달라지니까 같이 달라짐

const copyPerson = person; // 변수 person에 할당된 객체를 변수 copyPerson에 할당
person.name = "Hong"; // 변수 person에 할당된 객체의 값을 변경
console.log(person.name); // Hong
console.log(copyPerson.name); // Hong