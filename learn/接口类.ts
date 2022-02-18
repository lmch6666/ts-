class name<T> {
  private name!: T
  constructor() {
    
  }
}


// 显式传
let entity = new name<string>();
let entity1:name<string> = new name();

export {}