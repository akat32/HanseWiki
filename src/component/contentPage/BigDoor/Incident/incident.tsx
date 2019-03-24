import React, { Component } from 'react'

import './incident.scss'

interface IncidentProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Incident = ()=> {
    return (
        <ul className = "incident">
            { list.map ( i => <IncidentLi index = { i.index }/>)}
        </ul>
    )
}

const IncidentLi = (props:IncidentProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}