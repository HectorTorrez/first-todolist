import { useState } from "react"

export const AddTodo = ({ onNewTodo }) => {
    const [inputValue, setInputValue] = useState('')

    const onChanged = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if( inputValue.trim() <= 1) return;
        onNewTodo(
            inputValue
        )
        setInputValue('')

    }

  return (
    <form onSubmit={ onSubmit }  className='row'>
        <input
        type="text" 
        value={ inputValue }
        onChange={ onChanged }
        placeholder= 'Add Todo'
        className="form-control col me-4"
        />
        <button className="col-2 btn btn-primary">Add Todo</button>
    </form>
  )
}
