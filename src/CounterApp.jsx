import {React, useState} from "react";
import PropTypes from 'prop-types';

// const handleAdd = (event) => {
//     return console.log(event);
// }
export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => {
             setCounter(counter + 1);
        }

    const handleRemove = () => {
            setCounter( (c) => c - 1 );
        }

    const handleReset = () => setCounter(value);

   return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            {/* <button onClick={ (event) => handleAdd(event, 'otrovalor') } > */}
            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handleRemove}>
                -1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
   ); 
}

CounterApp.prototype = {
    value: PropTypes.number.isRequired,
}