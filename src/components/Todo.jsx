
export const Todo = ({ todo, setTodo }) => {


    const onDelete = (index) =>{
        setTodo(todo.filter(( todo, i)  => i !== index))
    }

  return (
    <>
        <ul>
            {
                todo.map( (todos, index) => [
                    <li key={ index }>
                        { todos }
                        <button onClick={ () => onDelete(index) }> Delete </button>
                    </li>
                ])
            }
        </ul>
    </>
  )
}
