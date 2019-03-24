import React, { Component } from 'react'

import './.scss'

interface bbProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const aa = ()=> {
    return (
        <ul className = "">
            { list.map ( i => <BB index = { i.index }/>)}
        </ul>
    )
}

const BB = (props:bbProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}