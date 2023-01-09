import { useState } from "react"
import { AddTodo } from "./components/AddTodo"
import { Todo } from "./components/Todo"

export const TodoList = () => {
    const [todo, setTodo] = useState([]);

    const onAddTodo = ( onNewTodo ) => {
        setTodo([
            onNewTodo,
            ...todo
        ])
        console.log(onNewTodo)
    }

  return (
    <div>
        <h1>Todo-list</h1>
        <hr />
        <AddTodo onNewTodo = { onAddTodo }/>
        <Todo todo = { todo } setTodo = { setTodo } />
    </div>
  )
}
