import React from 'react'

function PersonList2() {
const personList = [
    {
        name : 'Abhishek',
        age : 32,
        skill : 'Java'
    },
    {
        name : 'Manmeet',
        age : 32,
        skill : 'None'
    },
    {
        name : 'Ruchir',
        age : 32,
        skill : 'React'
    }

]

const list = personList.map(person => (
    <h1>{person.name} {person.age} {person.skill}</h1>))
    return <div>{list}</div>
}


export default PersonList2