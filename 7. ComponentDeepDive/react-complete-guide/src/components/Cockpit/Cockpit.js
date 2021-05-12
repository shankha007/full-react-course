import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);

  // useEffect runs after component is rendered
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //http requests...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);

    toggleButtonRef.current.click();

    //clean up work
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []); // [] used to control the useEffect, empty array will help to run useEffect only for twice only when mounted and when unmounted, if there is any element in the array then whenever that changes useEffect will run

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>

      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
        {/* <AuthContext.Consumer>
          {(context) => <button onClick={context.login}>Log in</button>}
        </AuthContext.Consumer> */}
        <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
