
interface A {
   go:(a:number ,b :number) => void
}

interface B {
  to:(a:string, b:string) => void
}

class Father {
  public name:string = '123'
  public age:number = 345
  constructor(){

  }
}

class Son extends Father implements A, B{
  constructor() {
    super()
  }
  go(a: number, b: number) {

  }
  to(a: string, b: string) {

  }
}

// 如果要编写公共性的API  面向接口编程
 function use(a: A) {
   
 }
// 所有实现接口的对象都可以传入
 use(new Son())
 use({go: () => {}})
