import React, { Component } from 'react'

import './other.scss'

interface OtherProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Other = ()=> {
    return (
        <ul className = "other">
            { list.map ( i => <OtherLi index = { i.index }/>)}
        </ul>
    )
}

const OtherLi = (props:OtherProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}