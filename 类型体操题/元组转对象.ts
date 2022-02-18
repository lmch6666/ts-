const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// type TupleToObject<T> = {
//   [K in keyof T] : T[K]
// }  

type TupleToObject<T extends readonly (string|number|symbol)[]> = {
  [key in T[number]]: key;
};

// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type result = TupleToObject<typeof tuple> 

 
let aaa:result = { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// keyof array 拿到的是数组的索引
// keyof 接口或者type之类的对象 拿到的是 key
// T[number]遍历数组方法 数组
  // xx in T[number]

export {}