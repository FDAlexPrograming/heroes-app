import { useState } from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {

    // function handleAdd(event){ 
    //     console.log( ' +1 ')
    // } 
    const [ counter, setCounter ] = useState( value );


    const handleAdd = (  ) =>{
        // setCounter( counter + 1);
        // o 
        setCounter( ( c ) => c + 1 );
    }

    const handleSubstract = () => setCounter( counter -1 );
    const handleReset = () => setCounter( value);

    return (
        <>
            <h1> Counter App</h1>
            <h2> { counter } </h2>
        <div className="botones">
            <button onClick={ handleAdd }> Sumar </button>
            <button onClick={ handleSubstract }> Restar </button>
            <button aria-label='btn-reset' onClick={ handleReset }> Resetear </button>

        </div>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
} 

