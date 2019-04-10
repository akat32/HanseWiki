import React, { Component } from 'react'

import './project.scss'

interface ProjectProps {
    index: Object
}

let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]


export const Project = ()=> {
    return (
        <ul className = "project">
            { list.map ( i => <ProjectLi index = { i.index }/>)}
        </ul>
    )
}

const ProjectLi = (props:ProjectProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}