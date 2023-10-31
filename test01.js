// 01. 상수와 변수
// 상수 : const(constant : 변함없는 수)
// 변수 : let

const a = 1;
let b = 3;

// a = 3; //TypeError:Assignment to constant variable.
b = 1;

console.log("a", a);
console.log("b", b);

// 02. Object
// key = value pair
const name = "kim";
const age = 21;
const testObj = {
  name,
  age,
  company: "Team Sparta",
  doSomething: () => {},
};

// 03. 복사 (얕은복사)
const obj1 = {
  value: 10,
};
const obj2 = obj1;
// JSON String의 형태로 변경하였다가 다시 본래의 형태로 변경
const obj3 = JSON.parse(JSON.stringify(obj1));
obj2.value += 1;
// 만약에 우리가 복사한 obj2를 바꾼다면 어떻게 될까?
// 예상 : obj2가 바뀌면 된다.
// 실제 : obj1도 함께 바뀌어버린다.
console.log("obj1", obj1);
console.log("obj2", obj2);
// JSON을 이용한 값은 변하지 않음.
console.log("obj3", obj3);

// 템플릿 리터럴
const testValue = 3;
console.log("문자열입니다.");
console.log(`문자열 ${testValue} 입니다.`); // 백틱

// 구조분해할당 (Destructuring : De + structuring : 구조를 분해한다.)
// 객체
const person = {
  name2: "르탄",
  age2: "22",
};

const { name2, age2, notFound } = person;
console.log(name2, age2, notFound);

// 배열
const testArr = [1, 2, 3, 4, 5];
const [one, two, three, four, five, six] = testArr;

// 전개연산자
let [user, ...rest] = ["kim", 25, "hihi"];
console.log(rest);
