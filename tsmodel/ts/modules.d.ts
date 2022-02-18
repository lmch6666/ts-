// 声明模块
declare module Lmc {

  export function add(params:any): void

}

// 声明变量
declare let name:string;
declare let age: number;
declare let iswork: boolean;

// 声明函数
declare function name(params:number): void

// 声明类

declare class name {
  name:string
  age: number 
  constructor(parameters: string) {
    
  }
}


// 声明文件  场景： 导入各种文件时使用
// 表示 以所有的.jpg文件 当成一个模块  以后导入文件就不报错了
declare module '*.jpg'
declare module '*.png'
declare module '*.webp'

// 声明命名空间  可以将没有ts化的第三方库 声明成一个空间来使用， 空间中来定义使用的方法 ， 
// 不声明的话导入第三方库的时候 在ts文件中会无法使用 比如jquery  ->  $ 
declare namespace ${
  export function customfunction(a:number, s:string) : void
}