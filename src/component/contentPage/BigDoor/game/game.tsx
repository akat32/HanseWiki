import React, { Component } from 'react'

import './game.scss'

interface GameProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Game = ()=> {
    return (
        <ul className = "game">
            { list.map ( i => <GameLi index = { i.index }/>)}
        </ul>
    )
}

const GameLi = (props:GameProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}