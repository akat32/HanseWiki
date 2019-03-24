import React, { Component } from 'react'

import './club.scss'

interface ClubProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Club = ()=> {
    return (
        <ul className = "club">
            { list.map ( i => <ClubLi index = { i.index }/>)}
        </ul>
    )
}

const ClubLi = (props:ClubProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}