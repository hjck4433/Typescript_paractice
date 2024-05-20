// interface - 같은 이름의 interface 병합 가능
interface Animal {
  name: string;
}

// interface Bear extends Animal {
//   honey: boolean;
// }
interface Animal {
  honey: boolean;
}

// const bear1: Bear = {
//   name: "honey bear",
//   honey: true,
// };

// 병합 ex
const bear1: Animal = {
  name: "honey bear",
  honey: true,
};

// type alias - 병합 불가

type Animal2 = {
  name: string;
};

type Bear2 = Animal & {
  honey: boolean;
};

const bear2: Bear2 = {
  name: "honey bear",
  honey: true,
};
