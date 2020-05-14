import React from 'react';

function PersonList() {
    const names = ['Abhishek', 'Manmeet', 'Ruchir'];
    const nameList = names.map(name => <h1>{name}</h1>) 
    return (
            <div>
                {
                  nameList  
                }
            </div>
    )
}

export default PersonList;

