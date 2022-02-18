// 可以定义并给一个默认值
interface HHH<T = string,E = string> {
  name: T,
  age: E
}

let aa: HHH<string,number> = {
  name: '1312',
  age:123
}

