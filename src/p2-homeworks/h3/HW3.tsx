import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([
       /* {_id: v1(), name: 'Nikola'},
        {_id: v1(), name: 'Masha'},*/
    ]); // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let newUser = {_id: v1(), name: name}
        if (newUser.name !== '') setUsers([...users, newUser]) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
