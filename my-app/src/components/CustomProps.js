import React from 'react';

const customProps  = (props) => {
    return(
    <div>
    <h1>This is Props Component !!! {props.test}</h1>
    <h1>{props.children}</h1>
    </div>
    );
}

export default  customProps