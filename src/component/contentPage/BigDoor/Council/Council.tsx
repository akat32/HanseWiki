import React, { Component } from 'react'

import './Council.scss'

interface CouncilProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Councli = ()=> {
    return (
        <ul className = "council">
            { list.map ( i => <CouncliLi index = { i.index }/>)}
        </ul>
    )
}

const CouncliLi = (props:CouncilProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}