"use strict";
class Father {
    constructor() {
        this.name = '123';
        this.age = 345;
    }
}
class Son extends Father {
    constructor() {
        super();
    }
    go(a, b) {
    }
    to(a, b) {
    }
}
// 如果要编写公共性的API  面向接口编程
function use(a) {
}
// 所有实现接口的对象都可以传入
use(new Son());
use({ go: () => { } });
//# sourceMappingURL=%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%AE%9E%E7%8E%B0.js.map