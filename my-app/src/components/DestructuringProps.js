import React from 'react';

const DestructuringProps  = ({test, children}) => {
    return(
    <div>
    <h1>This is Props Component !!! {test}</h1>
    <h1>This is Child Component !!! {children}</h1>
    </div>
    );
}

export default  DestructuringProps