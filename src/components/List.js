import React from 'react'

function List() {
    const names = [
        {
            'name': 'John',
            'age': 30
        },
        {
            "name": "Jane",
            "age": 28
        },
        {
            "name": "Joe",
            "age": 27
        }
    ]
    return (
        <div>
            {names.map((user, key) =>
            <User name={user.name} age={user.age}></User>
            )}
        </div>
    )
}

function User({name, age}) {
    return (
        <>
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
        </div>
        <hr/>
        </>
        )
}

export default List
