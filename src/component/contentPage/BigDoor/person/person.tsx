import React, { Component } from 'react'

import './person.scss'

interface PersonProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Person = ()=> {
    return (
        <ul className = "person">
            { list.map ( i => <PersonLi index = { i.index }/>)}
        </ul>
    )
}

const PersonLi = (props:PersonProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}