interface Todo {
  title: string
  description: string
  completed: boolean
}


type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

 // TODO 你得代码
 type MyPick<O,K extends keyof O> = {
  [V in K] : O[V]
}


export{}