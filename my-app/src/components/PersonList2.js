import React from 'react'
import Person from './Person'

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

const list = personList.map(person => <Person person = {person}></Person>)
   
return <div>{list}</div>

}


export default PersonList2