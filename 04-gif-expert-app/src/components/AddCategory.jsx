import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setInputValue ] = useState('');
    const onInputChanged = ({ target }) => {
        setInputValue( target.value );
    }
    const onSubmit = ( event ) => {
        event.preventDefault();
        const newInput = inputValue.trim();
        if ( newInput.length < 1 ) return;
        onNewCategory( newInput );
        setInputValue('');
    }
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type='text'
                placeholder="Buscar gifts"
                value= { inputValue }
                onChange={ onInputChanged }
            />
        </form>
  )
}
