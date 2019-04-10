import React, { Component } from 'react'

import './schooldepartment.scss'

interface SchooldepartmentProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Schooldepartment = ()=> {
    return (
        <ul className = "schooldepartment">
            { list.map ( i => <SchooldepartmentLi index = { i.index }/>)}
        </ul>
    )
}

const SchooldepartmentLi = (props:SchooldepartmentProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}