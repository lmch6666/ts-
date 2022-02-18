  // namespace命名空间
// 在使用命名空间的时候，需要使用 namespace xxx {}的形式
// 导出命名空间的时候，需要命名空间名来调用内部方法
export namespace titlename {
  export function fc666(params:number): string {
    return '222222'
  }

  export function fc66(params:string) {
    return 123123
  }
  
  export let aa = '123'

}

export namespace titlename1 {
  export function fc666(params:number) {
    return '113232'
  }
}