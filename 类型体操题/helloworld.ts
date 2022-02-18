//需要 @type-challenges/utils' 支持

import { Equal, Expect } from "@type-challenges/utils"

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



