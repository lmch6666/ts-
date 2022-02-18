// 枚举类型：使用的时候值只能是{}中定义的数据和类型 字符串枚举不能反向映射
enum type {
  qew = '12321',
}

// any 和 unknown 的最大区别
// unknown 是 top type  任何类型都是被unknown包括
// any 即是top type 也是 bottom type 它被任何类型包括  这导致使用any 就代表要放弃了类型检查
let data: unknown = '123123';
data = 31231;
data = false;


// never 类型表示的是那些用不存在的值的类型
// 例如 never类型是那些总是会抛出异常或根本就不会有返回值的函数 或者没有返回值的箭头函数
// 变量 也可能是never类型， 当他们被永不为真的类型保护所约束时。never类型是任何类型的子类型，也可以赋值给任何类型
// 只有 never 才能赋值给never any 和其他的都不行

// 函数抛出异常
function throwError(params: string): never {
  throw '12312'
}

// 根本不会有返回值的情况
function noreturnvalue(params: string): never {
  while (true) { }
}

// 收窄类型 never 
interface onee {
  name: 'haha'
}

interface twoo {
  name: 'hehe'
  age: number
}


type merge = onee | twoo
// 哪个值都不是 就只能是 never 了
function tst(params: merge) {
  switch (params.name) {
    case 'haha':

      break;
    case 'hehe':

      break;
    default:
      const cheak: never = params
      console.log(cheak);
      break;
  }
}

// 断言
//  1. <type>  功能 等于 as
let str: any = '12312'
let num: number = (<string>str).length // or
// let num:number = (str as string).length

// !非空断言
const obj1: {
  userinfo?: {
    id?: string,
    name?: string
  }
} = {
  userinfo: {
    id: "1"
  }
}
// 当访问对象中的id属性时，将视为不是空值的属性 适用于一般情况下可有可无 ， 但特殊情况下一定要有值的情况
const id2 = obj1.userinfo!.id

// const 将变量设置为只读 赋值的话将报错 
const obj23 = {
  l: '12312'
} as const
// as const 把整个对象转为一个类型字面量; as const 效果跟 const 类似，但是对类型系统而言，它可以确保所有的属性都被赋予一个字面量类型，而不是一个更通用的类型比如 string 或者 number 。


declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);

// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

// 解决：需要将 接收特殊的属性 转为 字面量类型
// 将正常string类型属性转换为 GET 字面量属性 也就是意味着  method的值的 “数据类型” 变为了GET
const reqQ = { url: "https://example.com", method: "GET" as "GET" };


// 感觉比较好的方案  使用enum 来做可选数据定义

enum Methods {
  "POST",
  "GET"
}

declare function handleRequest(url: string, methods: keyof typeof Methods): void

type req = {
  url: string,
  methods: keyof typeof Methods
}


// 接口，typescript 的核心原则之一是对值所具有的结构进行类型检查
interface UserInfo {
  id?: string,
  age?: number,
  name?: string,
  hobby?: string,
  // 可以后续添加的属性和值 但一定要符合设置的数据类型
  [key: string]: any
}

interface Obj {
  lable: string,
  name: string,
  age?: number,
  readonly y: number,

}

interface ClockInterface {
  currentTime: string;
  setTime(d: string): void;
}


class NAME {
  constructor() {

  }
}

// 实现接口 必须要实现全部接口已有且非空的属性

class Clock implements ClockInterface {
  currentTime: string = '12313';
  setTime(d: string) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}


class QWE extends NAME implements Obj, UserInfo {
  constructor() {
    super()
  }
  lable: string = '';
  name: string = '';
  age?: number | undefined;
  y: number = 0;
}


type qee = {
  content: string
}

// interface 与 type
// 1. 都可以描述一个对象
interface Iuse {
  name: string,
  age: number
}

type Iuse1 = {
  name: string,
  age: number
}

// 2. 都允许扩展

interface Iusee {
  name: string
}
// 扩展
interface Iuseee extends Iusee {
  age: number
}

type Iuse2 = {
  name: string
}
// 扩展
type Iuse22 = Iuse2 & { age: number }


// 不同点
// 1.type可以 interface不行
// 基本类型的别名
type name = string

// 高级类型： 联合类型
interface Idog {
  name: string,
  run : () => void
}

interface Icat {
  name: string,
  jiao: () => void
}
// 可以使用这种形式来定义可调用接口
interface Kezhixing{
  (a1:number, a2:number) : number
}

const fnnnnn:Kezhixing = (a1, a2) => {
  return a1 + a2
}

// 接口可继承

interface fasdj extends Icat, Idog {

}

let testobjj:fasdj = {
  name: "",
  jiao: function (): void {
    throw new Error("Function not implemented.");
  },
  run: function (): void {
    throw new Error("Function not implemented.");
  }
}

type pet = Idog | Icat;

// 2.interface 重复声明可以，type 不行
interface Iuseee {
  name: string,
  age: number
}

interface Iuseee {
  sex: string
}

// 高级类型 
// 交叉类型 属性合并了
interface Person {
  id: string,
  name: string
}

interface Anam {
  petname: string
}

// 属性合并
type dataa = Person & Anam

const dd: dataa = {
  id: '123',
  name: '12312',
  petname: 'ha'
}

// 1.使用
function otherExtends<T, K>(one: T, two: K): T & K {
  let result: T & K = <T & K>{}

  for (const key in one) {
    (<any>result)[key] = one[key]
  }

  for (const key in two) {
    if (!(<any>two).hasOwnProperty(key)) {
      (<any>result)[key] = two[key]
    }
  }
  return result
}

// 2.使用
function otherExtends1<T, K>(one: T, two: K): T & K {
  let result = <T & K>{}
  result = Object.assign(one, two)
  return result
}

// 联合类型 是设定中的哪一个类型都可以 也可以是某个具体的值
// TypeScript 会要求你做的事情，必须对每个联合的成员都是有效的。
// 当对变量使用 方法时 你不能只使用存在在string方法的值 反之 在每个变量上都有相同的方法时就会
type val = string | number

const v1: val = '1231';
const v2: val = 123;
// const v3:val = false 报错 因为没有设定可以是boolean类型

type oval = 1000 | 2000 | 3000

let v4: oval = 1000
// let v5:oval = 6000 报错 因为设定中没有 6000 这个值


// 定义
type fnn = (x: number, y: number) => number
// 使用
let fn = (x: number, y: number): number => x + y
// 完整的 前面做类型和返回值限定 ，后面 赋值具体函数
let myAdd: (baseValue: number, increment: number) => number =
  function (x: number, y: number): number { return x + y; };

function name1(params: boolean): string | number {
  return params ? '123' : 31
}

const res: number = name1(true) as number
console.log(res)

// let b = 99 as const（定义数据类型(值类型(是只读的)|数据类型)）  ===   const b = 99  <const></const>这么使也行

let a: string = '12321312312'
let d: number = 1321
let e: boolean = true as const
a = '13123123'
let b = 99 as const

//批量定义（值类型 | 数据类型）可以用这里的每一个项来约束
let arr = [a, 12, 321, "3213", b, { name: '1312312312' }, d, e] as const

let c = arr[1]

c = 12

console.log(b)

let obj = { name: '131231' } as const

console.log(obj.name)

function asd() {
  let a: string = 'string'
  let b = (x: number, y: number): number => x + y
  // 还可以直接 在返回值上定义
  // return [a,b] as [typeof a, typeof b]
  // 更直接的将
  return [a, b] as const
}

// 解构出来的属性的检查  (x:number,y:number) => number直接定义函数的形式也行
// let [q,p] = asd() as [string,Function]
let [q, p] = asd()

p(1, 2);

//  !非空断言直接在尾部 加上 ！ 即可
function gen<E, T, K>(aa: E, params: T, par: K): T {
  console.log(13132)
  return params
}
gen<boolean, string, number>(false, '1231', 12)
gen(true, String('12313123'), 12)


// 泛型

// 泛型函数
function id<T>(params: T): T {
  return params
}

// ts会进行类型推导
const str1: string = id<string>('123213')
// 不写<>也行const str1:string = id('123213')

// 设置默认值为 undefined 即可不用传递泛型
interface fanxingkou<T = undefined> {
  code: 200 | 300 | 400,
  dataa: T | null,
  message: string,
  // 预留一些特殊的key 索引类型
  [key: string]: any,
}

const request = {
  getdata(action: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (true) {
        const obj = {
          code: 200,
          dataa: {
            id: 1,
            name: '123'
          },
          message: 'haha'
        }
        resolve(obj)
      } else {
        const obj = {
          code: 200,
          dataa: null,
          message: 'haha'
        }
        resolve(obj)
      }
    })
  }
}

const getResult = async () => {
  const res: fanxingkou<{ id: number; name: string }> = await request.getdata(
    "getUserInfo"
  );
  console.log(res);
}


// 泛型类

class Count<T> {
  // 直接声明 没有初始化 所以需要 给一个初始值 或者直接对属性设置非空
  init: T | undefined;
  count: ((x: T, y: T) => T) | undefined;
}



const obj11 = {
  title: "标题",
  like1: 100
};

type Tj = typeof obj11;
// ts中的typeof操作符: 
// 如果是对象 就将对象的数据类型和属性名 作为模板 使用 就相当于 interface 和 type 一样
// 如果是基本类型的值  直接把数据类型作为模板使用
const obj2: Tj = { title: "标题2", like1: 1000 };

let stt = 123;

type TTT = typeof stt;

let sss: TTT = 1231

// 要想从某些参数上读属性的时候 需要让泛型继承参数所属的类 或者接口和类型
function gen1<T extends string>(params: T) {
  console.log(params.length)
}
gen1('1322131')


function gen333<E>(params: E[]) {

}
gen333([1, 32, 312, 312, 132])



function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <T>(arg: T) => T = identity;


// keyof 可以约束key的值 对使用interface或者type定义的对象类型 内部会解构成联合类型

interface test1 {
  name: string,
  age: number,
  address: string
}

type datee1 = keyof test1

// dddd的值 只能是 name | age | address 中的一个
let dddd: datee1 = "address"


// in  遍历联合类型  可以约束key的值

/*  
  k in xxx 类似对象的遍历，且只能使用在联合类型上
*/
type Tname = "aaaa" | "bbbb" | "cccc"

type ADD = {
  [key in Tname]: number
}

/* 
  k in keyof xxx 和 k in xxx 
  k in xxx 只能对联合类型使用
  k in keyof xxx  先用keyof 将对象转换成联合类型 在使用
*/



const ooo: ADD = { aaaa: 1, bbbb: 2, cccc: 3 }

// keyof T

function getshuju<T extends { [key: string]: number }>(params: T, key: keyof T): number {
  return params[key]
}

let objj = { a: 1, b: 12 }

getshuju(objj, "a")

// 约束声明 testt中key对应的value 只能是string
interface grade<T extends { [key in keyof T]?: string } = {}> {
  name: string,
  data: T
}


interface testt {
  hobby: string,
  gname: string
}

let windd: grade<testt> = {
  name: '12312',
  data: {
    hobby: '1231', gname: "12312"
  }
}


// Required<T> 转成 非空属性
// Partial<T> 转成 可空属性

// pick<T> 取出某些属性 ，提高interface的复用率
/*
  Pick<T>，反之Omit<T>
*/
interface TState {
  name: string;
  age: number;
  like: string[];
}
interface ISingleState {
  name: string;
  age: number;
}
interface ISingleState extends Pick<TState, "like" | "age"> { }


// 映射类型 新类型以相同的形式去转换旧类型里的每个属性
interface oldvalue {
  name: string,
  age: number
}

type lianhe = 'ads' | 'dfg'

/*  
  k in lianhe 类似对象的遍历，只能使用在联合类型上
*/
type otheraa = {
  [k in lianhe]: string
}

// 批量转换步骤
type Readonly1<T> = {
  readonly [k in keyof T]: T[k]
}

type Partial1<T> = {
  [k in keyof T]?: T[k]
}

type readd = Readonly1<oldvalue>
type partial = Partial1<oldvalue>

type Record22<K extends string, T> = {
  [p in K]: T
}

type thhh = Record22<'one' | 'two', string>

// ts 支持将元组和数组 映射成新的元组和数组，并不会生成新的类型
type maptopromise<T> = {
  // 
  [p in keyof T]: Promise<T[p]>
}

type Tuple = [number, string, boolean]

type promiseTuple = maptopromise<Tuple>

const tuple: promiseTuple = [
  new Promise((resolve) => { resolve(1) }),
  new Promise((resolve) => { resolve("1") }),
  new Promise((resolve) => { resolve(false) })
]

// 条件类型 extends 操作符半段前者是否是后者的子类型

type t<T> = T extends string ? string : number

// 当传入的类型为联合类型的时候， 叫做分布式条件类型
type typename<T> = T extends any ? T : never
type type123 = typename<string | number | boolean>


type TypeName666<T> = T extends string ? string :
  T extends number ? number :
  T extends boolean ? boolean :
  T extends undefined ? undefined :
  T extends () => void ? () => void : object

type Type4324<T> = T extends any[] ? T[number] : any
type iop123 = Type4324<boolean[]>

// 条件类型推断

// 专门做条件类型推断的关键字infer infer 是用来做累心推断并赋值的，
// 后面通常跟一个泛型变量，推断后的返回类型后面的泛型变量
type Type<T> = T extends Array<infer U> ? U : any
type Test = Type<string[]>
type Test123 = Type<string>

// 类

class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
  getName(): string {
    return this.name
  }
}

let animal = new Animal("Cat");

class Greeter<E> {
  static standardGreeting = "Hello, there";
  greeting: string = '12321';
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    }
    else {
      return Greeter.standardGreeting;
    }
  }
  static haha() {

  }
}

let greeter1: Greeter<string>;
greeter1 = new Greeter();
console.log(greeter1.greet());
// 以类来作为类型, 这种方式用来读取原型链上的属性
let greeterMaker: typeof Greeter = Greeter;
// let greeterMaker1: typeof Greeter; 这么写编译会出错 必须明确指定的类的类型
let greeterMaker11: Greeter<any>; // 用指定的类来约束 检查某个对象是否有相应的属性和值
greeterMaker.standardGreeting = '123123'
// greeterMaker.standardGreeting = "Hey there!";
let greeter2: Greeter<any> = new greeterMaker();
console.log(greeter2.greet());

/*
  基类/超类
*/
class Life {
  constructor(private name: string) {

  }
  /**
   * setname
   */
  public setname() {

  }
}

/*
  派生类 / 子类
  ts规定子类必须要在构造函数写 super()
 */
class Dog extends Life {
  protected color!: string;
  readonly legs!: number;
  constructor() {
    super('')
  }
  public jiao() {

  }
  public eat() {

  }
}

class yellowDog extends Dog {
  // 静态变量被所有的对象所共享，在内存中只有一个副本，它当且仅当在类初次加载时会被初始化
  static yellowNum: number = 0;

  public firstName: string = "";
  public lastName: string = "";

  get(): string {
    return this.firstName + '.' + this.lastName
  }

  set(fullName: string) {
    if (fullName === "dog.king") {
      console.log("名字不能为dog.king");
    }
  }
  constructor(name: string, color: string) {
    super();


    this.color = "yellow yellow yellow";
    // 在子类中可以访问父类的 protected 成员

    // this.what = "";
    // 在子类中不可以访问父类的 private 成员
    // error：Property 'what' is private and only accessible within class 'Animal'.

    console.log(this.getDogNums());
  }
  private getDogNums() {
    return `现在一共有${yellowDog.yellowNum}只黄狗`;
  }
  // 重写 父类 eat 方法
  public eat() {
    console.log("i am YelloDog，i eat");
    // 调用父类方法
    console.log("parent-eat：");
    super.eat();
  }
}


// 类型断言 可以理解成类型强制转换
// 两种形式 <数据类型>  or  as 数据类型 但在jsx中  只有 as能用

// 1. const 特点 
// 该表达式中的任何文字类型都不应扩展 （eg 不能从 "adas" -> string ）不能是string只能是adas
// 对象文字获取readonly
// 数组文字 变成readonly元组

let x = 'hello' as const

let y = [10, 20] as const

let z = { name: '123' } as const

// const 断言只能立即应用于简单的文字表达式
// "const" 断言只能用于引用枚举成员、字符串、数字、布尔值、数组或对象文本
// let a = (Math.random() < 1 ? 0.1 : " 0.2") as const


let aaaa = (Math.random() < 1 ? (0.1) as const : ("0.2") as const) // 对

// 但也不会立即将表达式中的内容转换为不可变的 仅限对象中引用的复杂类型值

let arre = [12, 13, 12, 3]

let foo = {
  objarr: arre
} as const

foo.objarr.push(123)

// 属性兼容性
interface Info {
  name: string
}

interface Info1123 {
  name: string,
  innn: { age: number }
}

let info: Info;
info = { name: '123' }
const info11 = { name: '123', age: 123 }
info = info11 //这样不会报错
//info = {name:'123', age:123}直接给会报错
info = { name: '123', age: 123 } as any // 范围变宽直接覆盖


// 函数兼容性

// 参数兼容
// 个数兼容 函数的参数个数不同能够向下兼容 ，也就是参数个数少的函数能赋值给参数个数多的 反之不行

let funcx = (x: number) => 0
let funcy = (x: number, y: number) => 0

funcy = funcx
// funcx = funcy 不行

function pickCard(x: number, y: string): number;
function pickCard(x: string, y: number): number;
function pickCard(x: string, y: string, z: boolean, a: string): number;
function pickCard(x: string, y: boolean, z: boolean): number;
// 在函数的重载中啊， 实现的函数是不能直接调用的
// 在写实现函数的时候, 如果有要写多个参数的话 要兼顾包含以上重载形式的参数的数据类型
function pickCard(x: any, y: any): number {
  return 0
}
// 类兼容
// 比较两个类类型数据 只有实例成员会被比较 ，静态成员构造函数不会比较 也不会检查多余的属性和方法

class Anim {
  public static age: string = '1231'
  constructor(aa: name) {

  }
}

class Peop {
  public static age: string = '1231'
  constructor(aa: name) {

  }
}

let shili:Anim = new Peop('fas')

// 类私有成员兼容 允许子类赋值给父类 牡丹石不能赋值给其他有同样类型的类
class ASD {
  constructor(private parameters) {
    
  }
}

class DSA extends ASD{
  constructor(parameters) {
    super(123)
  }
}
class Other{
  constructor(private parameters) {
    
  }
}


let tit:ASD = new DSA(123);
// let tit1:ASD = new Other(123); 报错