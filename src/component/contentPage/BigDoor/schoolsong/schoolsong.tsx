import React, { Component } from 'react'

import './schoolsong.scss'

interface SchoolsongProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Schoolsong = ()=> {
    return (
        <ul className = "schoolsong">
            { list.map ( i => <SchoolsongLi index = { i.index }/>)}
        </ul>
    )
}

const SchoolsongLi = (props:SchoolsongProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}