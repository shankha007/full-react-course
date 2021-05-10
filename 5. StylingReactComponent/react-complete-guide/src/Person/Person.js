// import React from 'react';
// import Radium from 'radium';

// import './Person.css'

// // functional component
// const person = (props) => {
//     const style = {
//         '@media (min-width: 500px)': {
//             width: '450px'
//         }
//     }

//     return (
//         <div className="Person" style={style}>
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// };

// export default Radium(person);

import React from 'react';

import classes from './Person.css';

// functional component
const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;