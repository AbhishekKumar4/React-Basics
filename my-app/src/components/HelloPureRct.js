import React from 'react';

const helloPure = () => {

    return React.createElement(
        'div',
        { id : 'hello', className : 'testclass'},
        React.createElement('h1', null, 'Hello from No JSX.')
    );

} 

export default helloPure;
