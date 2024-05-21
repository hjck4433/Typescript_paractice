//Partial : 특정 타입의 부분 집합을 만족하는 타입을 정의

interface Address {
  email: string;
  address: string;
}

const me: Partial<Address> = {};
const you: Partial<Address> = { email: "john@abc.com" };
const all: Address = { email: "john@abc.com", address: "john" };

//Pick : 특정 타입에서 몇 개의 속성을 선택해서 정의

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean Room",
  completed: false,
};

// Omit 특성 속성만 제거한 타입 정의

interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview2 = Omit<Todo2, "description">;

const todo2: TodoPreview2 = {
  title: "clean room",
  completed: false,
  createdAt: 12343423,
};

// Exclude - 일반 Union 유형을 전달한 다음 두 번째 인수에서 제거할 멤버를 지정

// Required - 원래 유형이 일부 속성을 선택 사항으로 정의한 경우에도 객체에 Required 속성이 있는지 확인해야 하는 경우
type User = {
  firstName: string;
  // 선택사항
  lastName?: string;
};

let firstUser: User = {
  firstName: "john",
};

// Required 사용 시 lastName이 필수 가 됨
let secondUser: Required<User> = {
  firstName: "john",
  lastName: "Doe",
};

// Record - 속성 키가 Keys이고 속성 값이 Type인 객체 type을 구성/ 이 유틸리티는 type의 속성을 다른 type에 매핑하는 데 사용
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shortail" },
};

// ReturnType - 함수 T의 반환 타입으로 구성된 타입
type T0 = ReturnType<() => string>;
type T1 = ReturnType<(s: string) => void>;

function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = "Hello";
// string 이어야 함으로 에러
// const b: ReturnType<typeof fn> = true;
