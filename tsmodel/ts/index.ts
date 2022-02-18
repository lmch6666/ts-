
interface HHHH {
   name: string,
   age:number
}


let obj =  {
  name:'123',
  age:123,
  asd: 543
}


let s:HHHH = obj

function add(num:number,num2:number):number {
  return num + num2
}

export {
  s,
  add
}
