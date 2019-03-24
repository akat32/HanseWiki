import React, { Component } from 'react'

import './guideline.scss'

interface GuidelineProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Guideline = ()=> {
    return (
        <ul className = "guideline">
            { list.map ( i => <GuidelineLi index = { i.index }/>)}
        </ul>
    )
}

const GuidelineLi = (props:GuidelineProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}