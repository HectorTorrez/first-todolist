
export const Todo = ({ todo, setTodo }) => {


    const onDelete = (index) =>{
        setTodo(todo.filter(( todo, i)  => i !== index))
    }

  return (
    <>
        <ul className="p-2">
            {
                todo.map( (todos, index) => [
                    <li className="list-group-item" key={ index }>
                        { todos }
                        <button className="btn btn-danger m-2" onClick={ () => onDelete(index) }> Delete </button>
                    </li>
                ])
            }
        </ul>
    </>
  )
}
