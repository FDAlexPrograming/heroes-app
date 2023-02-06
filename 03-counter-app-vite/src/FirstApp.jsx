// // import { Fragment } from "react"

// const getResult = (a, b) => {
//     return a + b;
// }

// export const FirstApp = () => {

//     // const newMessage = {
//         //     title: 'Alex',
//         //     message: 'Hola mundo',
//         // };

//   return (
//     <>
//         <h1> { getResult( 4, 4 ) } </h1>
//         {/* <code> { JSON.stringify( newMessage )  } </code> */}
//         <p>soy un párrafo </p>
//     </>
//   )
// }

import PropTypes from 'prop-types';
export const FirstApp = ( { title, párrafo, name } ) => {
  
  // console.log( props );
  
  
  return (
    <>
        <h1 data-testid="test-title">{ title }</h1>
        <p> { párrafo }</p>
        <p> { párrafo }</p>
        <p> { name }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  párrafo: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
//title: ' No hay párrafo ',
  párrafo: ' No hay párrafo ',
  name: ' Alex Farias '
}

