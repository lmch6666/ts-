


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

/* _____________ 你的代码 _____________ */

type Length<T extends readonly any[]> = T["length"] extends 0 ? never : T["length"]



type teslaLength = Length<typeof tesla> // expected 4
type spaceXLength = Length<typeof spaceX> // expected 5
type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]
