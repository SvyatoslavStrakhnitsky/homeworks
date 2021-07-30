import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.items}>
            <div>
                <span>{props.affair.name}</span>
            </div>
            <div>
                <span> {props.affair.priority}</span>
                <button className={s.buttonX} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
