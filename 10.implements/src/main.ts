class Car {
  mileage = 0;
  price = 100;
  color = "white";

  drive() {
    return "drive!";
  }
  brake() {
    return "brake!";
  }
}

interface Part {
  seats: number;
  tire: number;
}
// implements 의 경우 정의 된 속성이 모두 정의 되어야 함
// extends의 경우 정의 하지 않아도 상속이 됨
class Ford implements Car, Part {
  mileage = 1;
  price = 2;
  color = "white";

  seats = 4;
  tire = 4;

  drive() {
    return "drive!";
  }
  brake() {
    return "brake!";
  }
}

const myFordCar = new Ford();
