// type assertion
const bodyElement = document.querySelector("body") as HTMLBodyElement;
bodyElement!.innerText = "Hello";
// // type guard
if (bodyElement) {
  bodyElement.innerText = "Hello";
}

// type assertion은 조심해야 함
// 잘못된 사용 예시
// function func(arg: string | null) {
//   return (arg as string).toLowerCase();
// }

// 위와 같은 경우 type guard 사용
function func(arg: string | null) {
  if (arg) {
    return (arg as string).toLowerCase();
  }
}

func("hello");
func(null);
