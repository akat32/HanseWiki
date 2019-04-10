import React, { Component } from 'react'

import './value.scss'

interface ValueProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Value = ()=> {
    return (
        <ul className = "value">
            { list.map ( i => <ValueLi index = { i.index }/>)}
        </ul>
    )
}

const ValueLi = (props:ValueProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}