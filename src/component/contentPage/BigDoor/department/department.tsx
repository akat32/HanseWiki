import React, { Component } from 'react'

import './department.scss'

interface DepartmentProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Department = ()=> {
    return (
        <ul className = "department">
            { list.map ( i => <DepartmentLi index = { i.index }/>)}
        </ul>
    )
}

const DepartmentLi = (props:DepartmentProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}