
class dnf {
  protected name = '12313'
  protected  getPos() {
    console.log(this.name)
  }
}


class nvgui extends dnf {

  public getq(){
    this.getPos()
  }
}


let yu = new nvgui()

yu.getq()


interface IResult<T = undefined> {
  code: 2000 | 4000 | 5000;
  data: T | null;
  message: string;
  // 预留一些其他的特殊的key
  [otherKey: string]: any;
}

const $request = {
  get(action: string): Promise<any> {
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
      } else {
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
  const ers: IResult<{ id: number; name: string }> = await $request.get(
    "getUserInfo"
  );

};
getUserInfo();