"use strict";
// 枚举类型：使用的时候值只能是{}中定义的数据和类型 字符串枚举不能反向映射
var type;
(function (type) {
    type["qew"] = "12321";
})(type || (type = {}));
// any 和 unknown 的最大区别
// unknown 是 top type  任何类型都是被unknown包括
// any 即是top type 也是 bottom type 它被任何类型包括  这导致使用any 就代表要放弃了类型检查
let data = '123123';
data = 31231;
data = false;
// never 类型表示的是那些用不存在的值的类型
// 例如 never类型是那些总是会抛出异常或根本就不会有返回值的函数 或者没有返回值的箭头函数
// 变量 也可能是never类型， 当他们被永不为真的类型保护所约束时。never类型是任何类型的子类型，也可以赋值给任何类型
// 只有 never 才能赋值给never any 和其他的都不行
// 函数抛出异常
function throwError(params) {
    throw '12312';
}
// 根本不会有返回值的情况
function noreturnvalue(params) {
    while (true) { }
}
// 哪个值都不是 就只能是 never 了
function tst(params) {
    switch (params.name) {
        case 'haha':
            break;
        case 'hehe':
            break;
        default:
            const cheak = params;
            console.log(cheak);
            break;
    }
}
// 断言
//  1. <type>  功能 等于 as
let str = '12312';
let num = str.length; // or
// let num:number = (str as string).length
// !非空断言
const obj1 = {
    userinfo: {
        id: "1"
    }
};
// 当访问对象中的id属性时，将视为不是空值的属性 适用于一般情况下可有可无 ， 但特殊情况下一定要有值的情况
const id2 = obj1.userinfo.id;
// const 将变量设置为只读 赋值的话将报错 
const obj23 = {
    l: '12312'
};
const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
// 解决：需要将 接收特殊的属性 转为 字面量类型
// 将正常string类型属性转换为 GET 字面量属性 也就是意味着  method的值的 “数据类型” 变为了GET
const reqQ = { url: "https://example.com", method: "GET" };
// 感觉比较好的方案  使用enum 来做可选数据定义
var Methods;
(function (Methods) {
    Methods[Methods["POST"] = 0] = "POST";
    Methods[Methods["GET"] = 1] = "GET";
})(Methods || (Methods = {}));
class NAME {
    constructor() {
    }
}
// 实现接口 必须要实现全部接口已有且非空的属性
class Clock {
    constructor(h, m) {
        this.currentTime = '12313';
    }
    setTime(d) {
        this.currentTime = d;
    }
}
class QWE extends NAME {
    constructor() {
        super();
        this.lable = '';
        this.name = '';
        this.y = 0;
    }
}
const fnnnnn = (a1, a2) => {
    return a1 + a2;
};
let testobjj = {
    name: "",
    jiao: function () {
        throw new Error("Function not implemented.");
    },
    run: function () {
        throw new Error("Function not implemented.");
    }
};
const dd = {
    id: '123',
    name: '12312',
    petname: 'ha'
};
// 1.使用
function otherExtends(one, two) {
    let result = {};
    for (const key in one) {
        result[key] = one[key];
    }
    for (const key in two) {
        if (!two.hasOwnProperty(key)) {
            result[key] = two[key];
        }
    }
    return result;
}
// 2.使用
function otherExtends1(one, two) {
    let result = {};
    result = Object.assign(one, two);
    return result;
}
const v1 = '1231';
const v2 = 123;
let v4 = 1000;
// 使用
let fn = (x, y) => x + y;
// 完整的 前面做类型和返回值限定 ，后面 赋值具体函数
let myAdd = function (x, y) { return x + y; };
function name1(params) {
    return params ? '123' : 31;
}
const res = name1(true);
console.log(res);
// let b = 99 as const（定义数据类型(值类型(是只读的)|数据类型)）  ===   const b = 99  <const></const>这么使也行
let a = '12321312312';
let d = 1321;
let e = true;
a = '13123123';
let b = 99;
//批量定义（值类型 | 数据类型）可以用这里的每一个项来约束
let arr = [a, 12, 321, "3213", b, { name: '1312312312' }, d, e];
let c = arr[1];
c = 12;
console.log(b);
let obj = { name: '131231' };
console.log(obj.name);
function asd() {
    let a = 'string';
    let b = (x, y) => x + y;
    // 还可以直接 在返回值上定义
    // return [a,b] as [typeof a, typeof b]
    // 更直接的将
    return [a, b];
}
// 解构出来的属性的检查  (x:number,y:number) => number直接定义函数的形式也行
// let [q,p] = asd() as [string,Function]
let [q, p] = asd();
p(1, 2);
//  !非空断言直接在尾部 加上 ！ 即可
function gen(aa, params, par) {
    console.log(13132);
    return params;
}
gen(false, '1231', 12);
gen(true, String('12313123'), 12);
// 泛型
// 泛型函数
function id(params) {
    return params;
}
// ts会进行类型推导
const str1 = id('123213');
const request = {
    getdata(action) {
        return new Promise((resolve, reject) => {
            if (true) {
                const obj = {
                    code: 200,
                    dataa: {
                        id: 1,
                        name: '123'
                    },
                    message: 'haha'
                };
                resolve(obj);
            }
            else {
                const obj = {
                    code: 200,
                    dataa: null,
                    message: 'haha'
                };
                resolve(obj);
            }
        });
    }
};
const getResult = async () => {
    const res = await request.getdata("getUserInfo");
    console.log(res);
};
// 泛型类
class Count {
}
const obj11 = {
    title: "标题",
    like1: 100
};
// ts中的typeof操作符: 
// 如果是对象 就将对象的数据类型和属性名 作为模板 使用 就相当于 interface 和 type 一样
// 如果是基本类型的值  直接把数据类型作为模板使用
const obj2 = { title: "标题2", like1: 1000 };
let stt = 123;
let sss = 1231;
// 要想从某些参数上读属性的时候 需要让泛型继承参数所属的类 或者接口和类型
function gen1(params) {
    console.log(params.length);
}
gen1('1322131');
function gen333(params) {
}
gen333([1, 32, 312, 312, 132]);
function identity(arg) {
    return arg;
}
let myIdentity = identity;
// dddd的值 只能是 name | age | address 中的一个
let dddd = "address";
/*
  k in keyof xxx 和 k in xxx
  k in xxx 只能对联合类型使用
  k in keyof xxx  先用keyof 将对象转换成联合类型 在使用
*/
const ooo = { aaaa: 1, bbbb: 2, cccc: 3 };
// keyof T
function getshuju(params, key) {
    return params[key];
}
let objj = { a: 1, b: 12 };
getshuju(objj, "a");
let windd = {
    name: '12312',
    data: {
        hobby: '1231', gname: "12312"
    }
};
const tuple = [
    new Promise((resolve) => { resolve(1); }),
    new Promise((resolve) => { resolve("1"); }),
    new Promise((resolve) => { resolve(false); })
];
// 类
class Animal {
    constructor(theName) { this.name = theName; }
    getName() {
        return this.name;
    }
}
let animal = new Animal("Cat");
class Greeter {
    constructor() {
        this.greeting = '12321';
    }
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
Greeter.standardGreeting = "Hello, there";
let greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
// 以类来作为类型, 这种方式用来读取原型链上的属性
let greeterMaker = Greeter;
// let greeterMaker1: typeof Greeter; 这么写编译会出错 必须明确指定的类的类型
let greeterMaker11; // 用指定的类来约束 检查某个对象是否有相应的属性和值
greeterMaker.standardGreeting = '123123';
// greeterMaker.standardGreeting = "Hey there!";
let greeter2 = new greeterMaker();
console.log(greeter2.greet());
/*
  基类/超类
*/
class Life {
    constructor(name) {
        this.name = name;
    }
    /**
     * setname
     */
    setname() {
    }
}
/*
  派生类 / 子类
  ts规定子类必须要在构造函数写 super()
 */
class Dog extends Life {
    constructor() {
        super('');
    }
    jiao() {
    }
    eat() {
    }
}
class yellowDog extends Dog {
    constructor(name, color) {
        super();
        this.firstName = "";
        this.lastName = "";
        this.color = "yellow yellow yellow";
        // 在子类中可以访问父类的 protected 成员
        // this.what = "";
        // 在子类中不可以访问父类的 private 成员
        // error：Property 'what' is private and only accessible within class 'Animal'.
        console.log(this.getDogNums());
    }
    get() {
        return this.firstName + '.' + this.lastName;
    }
    set(fullName) {
        if (fullName === "dog.king") {
            console.log("名字不能为dog.king");
        }
    }
    getDogNums() {
        return `现在一共有${yellowDog.yellowNum}只黄狗`;
    }
    // 重写 父类 eat 方法
    eat() {
        console.log("i am YelloDog，i eat");
        // 调用父类方法
        console.log("parent-eat：");
        super.eat();
    }
}
// 静态变量被所有的对象所共享，在内存中只有一个副本，它当且仅当在类初次加载时会被初始化
yellowDog.yellowNum = 0;
// 类型断言 可以理解成类型强制转换
// 两种形式 <数据类型>  or  as 数据类型 但在jsx中  只有 as能用
// 1. const 特点 
// 该表达式中的任何文字类型都不应扩展 （eg 不能从 "adas" -> string ）不能是string只能是adas
// 对象文字获取readonly
// 数组文字 变成readonly元组
let x = 'hello';
let y = [10, 20];
let z = { name: '123' };
// const 断言只能立即应用于简单的文字表达式
// "const" 断言只能用于引用枚举成员、字符串、数字、布尔值、数组或对象文本
// let a = (Math.random() < 1 ? 0.1 : " 0.2") as const
let aaaa = (Math.random() < 1 ? (0.1) : ("0.2")); // 对
// 但也不会立即将表达式中的内容转换为不可变的 仅限对象中引用的复杂类型值
let arre = [12, 13, 12, 3];
let foo = {
    objarr: arre
};
foo.objarr.push(123);
let info;
info = { name: '123' };
const info11 = { name: '123', age: 123 };
info = info11; //这样不会报错
//info = {name:'123', age:123}直接给会报错
info = { name: '123', age: 123 }; // 范围变宽直接覆盖
// 函数兼容性
// 参数兼容
// 个数兼容 函数的参数个数不同能够向下兼容 ，也就是参数个数少的函数能赋值给参数个数多的 反之不行
let funcx = (x) => 0;
let funcy = (x, y) => 0;
funcy = funcx;
// 在函数的重载中啊， 实现的函数是不能直接调用的
// 在写实现函数的时候, 如果有要写多个参数的话 要兼顾包含以上重载形式的参数的数据类型
function pickCard(x, y) {
    return 0;
}
// 类兼容
// 比较两个类类型数据 只有实例成员会被比较 ，静态成员构造函数不会比较 也不会检查多余的属性和方法
class Anim {
    constructor(aa) {
    }
}
Anim.age = '1231';
class Peop {
    constructor(aa) {
    }
}
Peop.age = '1231';
let shili = new Peop('fas');
// 类私有成员兼容 允许子类赋值给父类 牡丹石不能赋值给其他有同样类型的类
class ASD {
    constructor(parameters) {
        this.parameters = parameters;
    }
}
class DSA extends ASD {
    constructor(parameters) {
        super(123);
    }
}
class Other {
    constructor(parameters) {
        this.parameters = parameters;
    }
}
let tit = new DSA(123);
// let tit1:ASD = new Other(123); 报错
//# sourceMappingURL=1.js.map