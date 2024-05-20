"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
//String
let string;
let fristName = "Doe";
// Array
// 한가지 타입만 가지는 배열
let names1 = ["John", "Kim"];
let names2 = ["John", "Kim"];
// 여러 타입을 가지는 배열 (유니언 타입 사용)
let array1 = ["John", 1, 2];
let array2 = ["John", 1, 2];
// 여러 타입을 단언 X any
let someArray = ["Jhon", 1, [], {}, false];
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ["A", "B"];
let numberArray = [1, 2];
// readonly string[] 형식에 'push' 속성이 없습니다.
// stringArray.push('C');
// readonly number[] 형식의 인덱스 시그니처는 읽기만 허용됩니다.
// numberArray[0] = 3
// Tuple
let tuple1;
tuple1 = ["a", 1];
// [string, number, number] 형식은 [string, number] 형식에 할당할 수 없습니다.
//  소스에 3개 요소가 있지만, 대상에서 2개만 허용합니다.
// tuple1 = ['a', 1, 2];
// 순서가 달라 할당 불가
// tuple1 = [1, 'a']
let users;
users = [
    [1, "John"],
    [2, "Doe"],
];
let tuple2;
tuple2 = ["a", 1];
// push 메소드로 값을 추가할 수 있음 (단 선언된 타입만 추가 가능)
tuple2.push(2);
console.log(tuple2);
// any
// third-party library를 사용하는 경우 라이브러리의 타입을 다 알 수 없으므로 사용
let any = "abc";
any = 1;
any = [];
// unknown
let unknown = false;
let string1 = unknown;
//Object
let object = {};
let arr = [];
// strict에서 에러
// let nul: object = null;
let date = new Date();
const obj1 = {
    id: 1,
    title: "title1",
    description: "description1",
};
// Union
let union;
union = "hi";
union = 123;
// Function (매개변수) => 리턴 타입
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log("hi");
};
// Null, Undefined "strictNullChecks": false 일 때만 오류 없음
let number1 = undefined;
let string2 = null;
let object2 = undefined;
let array = null;
let undefined1 = null;
let null1 = undefined;
let void1 = null;
// "strictNullChecks": true 여도 오류 없음
let void2 = undefined;
// Void
function greeting() {
    console.log("hi");
}
const hi = greeting();
console.log(hi); // undefined
// never
function throwError() {
    throw new Error("error");
}
function keepProcessing() {
    while (true) {
        console.log("hi");
    }
}
