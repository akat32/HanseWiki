import React, { Component } from 'react'

import './inpra.scss'

interface InpraProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Inpra = ()=> {
    return (
        <ul className = "inpra">
            { list.map ( i => <InpraLi index = { i.index }/>)}
        </ul>
    )
}

const InpraLi = (props:InpraProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}