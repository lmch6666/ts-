
import { Equal, Expect } from '@type-challenges/utils'


type arrr = [32,3,2]
// 数组[number] 遍历 将数组转换成联合类型
type t1 = arrr[number]


// 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []

//  type First<T extends any[]> = T extends [] ? never : T[0]
//  type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
//  type First<T extends any[]> = T[0] extends T[number] ? T[0] : never 
type First<T extends any[]> = T extends [infer First, ... infer rest] ? First : never
type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
type head3 = First<arr3> // expected to be never


type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]

// extends 类型条件判断
// 获取 数组中的 length 属性  ts中 也可以获取属性的
//  extends union 判断的规则
// 使用infer推断
function name(arr: Array<number>) {
  const [first ,...rest] = arr;
  first ? first : rest
}