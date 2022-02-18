"use strict";
class dnf {
    constructor() {
        this.name = '12313';
    }
    getPos() {
        console.log(this.name);
    }
}
class nvgui extends dnf {
    getq() {
        this.getPos();
    }
}
let yu = new nvgui();
yu.getq();
const $request = {
    get(action) {
        return new Promise((resolve, _) => {
            if (true) {
                const obj = {
                    code: 2000,
                    data: {
                        id: 1,
                        name: "zhangsan"
                    },
                    message: "请求成功"
                };
                resolve(obj);
            }
            else {
                const obj = {
                    code: 5000,
                    data: null,
                    message: "请求失败"
                };
                resolve(obj);
            }
        });
    }
};
// 1
// 开始请求
const getUserInfo = async () => {
    const ers = await $request.get("getUserInfo");
};
getUserInfo();
//# sourceMappingURL=2.js.map