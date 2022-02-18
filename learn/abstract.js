"use strict";
class Person1 {
}
class Me extends Person1 {
    constructor() {
        super();
    }
    getCheckout() {
        return '1123';
    }
    getname() {
        console.log(1231);
    }
}
// 把类当做接口使用 同名的类和接口的属性会被合并
class User {
    run() {
        return "run";
    }
}
const user = {
    eat() {
        return '1231';
    },
    run() {
        return "123123";
    },
    name: '12313',
    hobby: 'wjahjkljhfkl'
};
//# sourceMappingURL=abstract.js.map