import React from 'react';

const Validation = (props) => {
    let text = 'Text too short';
    if (props.textLen > 5)
        text = 'Text long enough';
    return (
        <div>
            <p>{text}</p>
        </div>
    );
}

export default Validation;
