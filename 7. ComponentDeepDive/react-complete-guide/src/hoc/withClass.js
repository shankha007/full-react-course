import React from 'react';

// const WithClass = (props) => (
//     <div className={props.classes}>{props.children}</div>
// );

// a function which return a functional component
const WithClass = (WrappedComponent, className) => {
    return props => (
        <div className={className} >
            <WrappedComponent {...props} />
        </div>
    );
};


export default WithClass;
