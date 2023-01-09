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

    }

  return (
    <form onSubmit={ onSubmit }>
        <input
        type="text" 
        value={ inputValue }
        onChange={ onChanged }
        placeholder= 'Add Todo'
        />
        <button>Add Todo</button>
    </form>
  )
}
