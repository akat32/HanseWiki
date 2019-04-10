import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import './notice.scss'

interface NoticeProps {
    index: Object
}
let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]
export const Notice = ()=> {
    useEffect;
    return (
        <ul className = "innerNotice">
            { list.map ( i => (<NoticeList index={i.index}/>))}
        </ul>
    )
}
const NoticeList = (props:NoticeProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}