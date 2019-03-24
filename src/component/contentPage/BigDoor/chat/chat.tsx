import React, { Component } from 'react'

import './chat.scss'

interface ChatProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Chat = ()=> {
    return (
        <ul className = "chat">
            { list.map ( i => <ChatLi index = { i.index }/>)}
        </ul>
    )
}

const ChatLi = (props:ChatProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}