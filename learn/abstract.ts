abstract class Person1 {

  public abstract getname(): void;
  public abstract getCheckout(): string;

}

class Me extends Person1 {

  constructor() {
    super();
  }

  public getCheckout(): string {
    return '1123'
  }

  public getname(): void {
    console.log(1231);
  }
}


// 把类当做接口使用 同名的类和接口的属性会被合并

class User {
  id?: string;
  age?: number;
  sleep?: () => void;
  run() {
    return "run"
  }
}

/* 
    run() {
      return "run"
    }
    ===
    run : () => string
*/

interface User {
   name: string;
   hobby: string;
   eat: () => string;
}

const user: User = {
  eat(){
    return '1231'
  },
  run(){
    return "123123"
  },
  name: '12313',
  hobby: 'wjahjkljhfkl'
}