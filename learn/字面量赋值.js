// 当进行字面量赋值的时候，是会进行类型推倒的 将属性值推导出来对应的属性 当推导出来的类型与指定的类型不符时，就会报错
// const person: Attribute = {
//   name: ' ',
//   age: 123,
//   iss: false,
//   other: 123
// } 报错
const person = {
    name: ' ',
    age: 123,
    iss: false,
    other: 123
};
// 当把引用的值赋值给其他的值的时候
// ts会检查数据类型是否正确，如果属性对的上或者属性对的上但是有其他属性在内的时候 ，ts会进行擦除操作 freshness
// 类型检查时,将多余的属性擦除 
let shili = person;
// 开发常见场景
function hahha(params) {
    console.log(params);
}
// hahha({
//   name: ' ',
//   age: 123,
//   iss: false,
//   other: 123
// }) 报错
// 赋值给一个引用 出入函数类型检查时，会进行擦除操作
let shili2 = {
    name: ' ',
    age: 123,
    iss: false,
    other: 123
};
hahha(shili2);
var chong;
(function (chong) {
    chong["chong1"] = "chong1";
    chong["chong2"] = "chong2";
    chong["chong3"] = "chong3";
})(chong || (chong = {}));
var chong1;
(function (chong1) {
    chong1[chong1["chong1"] = 0] = "chong1";
    chong1[chong1["chong2"] = 1] = "chong2";
    chong1[chong1["chong3"] = 2] = "chong3";
})(chong1 || (chong1 = {}));
console.log(chong.chong1); // 对应的值
console.log(chong1.chong1); // 对应的索引
export {};
//# sourceMappingURL=%E5%AD%97%E9%9D%A2%E9%87%8F%E8%B5%8B%E5%80%BC.js.map