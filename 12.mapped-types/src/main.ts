type DeviceFormatter<T> = {
  // ? (optional)을 활용
  [K in keyof T]?: T[K];
};

type Device = {
  manufacturer: string;
  price: number;
};

const iphone: DeviceFormatter<Device> = {
  manufacturer: "apple",
  price: 100,
};

const priceOnly: DeviceFormatter<Device> = { price: 23 };
