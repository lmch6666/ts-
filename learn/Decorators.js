"use strict";
//   装饰器  : 其实就是一个函数  其中内部接收一个构造函数 target 
//   那一个构造函数就会自动传入装饰器内部 
//  装饰器写在class 上方就是 类装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Inject = (fn = () => { }) => (target) => {
    // 传入自定义得函数
    target.prototype.fn = fn;
};
const HA = () => (target) => {
    // 不传入自定义函数
    target.prototype.sayHAHA = function () {
        console.log('思迈鲁思迈鲁思迈鲁思迈鲁思迈鲁');
    };
};
let Test1 = class Test1 {
};
Test1 = __decorate([
    Inject(() => {
        console.log('*chengle!!');
    }),
    HA()
], Test1);
const test = new Test1();
console.log(test.fn());
// 写在 函数上方就是  方法装饰器
const fnn = (key) => {
    return (target, propertyKey, descriptor) => {
        // 参数 1. 方法名 与 值 2. 方法名 3.对象的配置项（包括 值和 读写配置项）
        const origin = descriptor.value;
        descriptor.value = function (...args) {
            // 将原有的保存再覆盖 可以在这里做一些改变原有行为的操作
            this[key] = true;
            origin.apply(this, args);
            // (this as any)[key] = false
        };
    };
};
const methodDe = (...args) => {
    // args 中的参数 1. 方法名 与 值 2. 方法名 3.对象的配置项（包括 值和 读写配置项）
    console.log(args);
};
const sleepFn = (target, propertyKey, descriptor) => {
    const method = descriptor.value;
    descriptor.value = function () {
        setTimeout(() => {
            method();
        }, 2000);
    };
};
class Test2 {
    constructor() {
    }
    get goOut() {
        return this._data;
    }
    set goOut(val) {
        this._data = val;
        console.log("current-goOut: >>", this._data);
    }
    sayHello(name, age) {
        console.log("current-goOut: >>", name);
        console.log("current-goOut: >>", age);
    }
}
__decorate([
    fnn('gogogo'),
    methodDe
], Test2.prototype, "sayHello", null);
const test2 = new Test2();
test2.sayHello("zhagnsan", 10);
function fib(n, a, b) {
    if (n == 0) {
        return a;
    }
    else {
        return fib(n - 1, a + b, a);
    }
}
;
//# sourceMappingURL=Decorators.js.map