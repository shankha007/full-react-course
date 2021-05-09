// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value'
//   }
//   switchNameHandler = () => {
//     // console.log("was clicked");
//     // personState.persons[0].name = 'Maximilian'; // DON'T DO THIS, this is not the right way to change state
//     this.setState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//     });
//   } // it will not even touch 'otherState', that will be as it was

//   render() {
//     const style= {
  //   backgroundColor: 'white',
  //   font: 'inherit',
  //   border: '1px solid blue',
  //   padding: '8px',
  //   cursor: 'pointer'
  // }
//     return (
//       // we have to use className as class is already a reserved keyword in JS
//       <div className="App">
//         <h1>Hi, I'm a React App.</h1>
//         <p>This is really working!</p>
//         <button style={style} onClick={this.switchNameHandler}>Switch Name & Age</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person> {/* reusing components */}
//         <Person name={personState.persons[2].name} age={personState.persons[2].age} /> {/* reusing components */}
//       </div>
//     );

//     // return React.createElement('div', null, 'h1','Hi, I\'m a React App!!!'); //Wrong Code

//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

//     // But this way of writing is very much complex. That's why we use JSX mode of code, which is the first one.
//     // Actually that first code is ultimately compiler into this form, but as a developer it is hard to write code like this.
//     // This is why JSX way is more preferable
//   }
// }

// export default App;

const App = props => {
  const [ personState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  });
  // useState can be used multiple times
  // console.log(personState);

  const switchNameHandler = (newName) => {
    // console.log("was clicked");
    // personState.persons[0].name = 'Maximilian'; // DON'T DO THIS, this is not the right way to change state
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ],
      otherState: personState.otherState // in case of functional component, it has to be done to keep this state intact
    });
  }

  const nameChangedHandler= (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      otherState: personState.otherState // in case of functional component, it has to be done to keep this state intact
    });
  }

  const style= {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    // we have to use className as class is already a reserved keyword in JS
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <p>This is really working!</p>
      {/*This wasy of passing function reference is not recommended */}
      <button 
      style={style}
      onClick={() => switchNameHandler('Maximilian!')}
      >Switch Name & Age</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person 
        name={personState.persons[1].name} 
        age={personState.persons[1].age}
        click={switchNameHandler.bind(this, 'Max!')} // passing function reference to other component (embedded)
        changed={nameChangedHandler}
        >My Hobbies: Racing</Person> {/* reusing components */}
      <Person name={personState.persons[2].name} age={personState.persons[2].age} /> {/* reusing components */}
    </div>
  );
}

export default App;
