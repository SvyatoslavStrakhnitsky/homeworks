import React, {ButtonHTMLAttributes, ChangeEvent, KeyboardEvent, KeyboardEventHandler, MouseEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.someClass// need to fix with (?:)

    return (
        <div>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyPress={onKeyPressHandler}
                       onBlur={setNameCallback}/>
                <button className={s.buttonAdd} onClick={addUser}>Add</button>
                <span style={{color: 'blue'}}> {totalUsers}</span>
            </div>
            <div className={s.error}>{error}</div>
        </div>
    )
}

export default Greeting
