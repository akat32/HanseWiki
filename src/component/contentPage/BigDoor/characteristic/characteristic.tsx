import React, { Component } from 'react'
import './characteristic.scss'

interface CharacteristicProps {
    index: Object
}
let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]

export const Characteristic = ()=> {
    return (
        <ul className = "characteristic">
            { list.map ( i => (<CharacteristicList index={i.index}/>))}
        </ul>
    )
}

const CharacteristicList = (props:CharacteristicProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}