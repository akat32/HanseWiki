import React, { Component, useState } from 'react'
import './content.scss'

import { LeftTap } from '../leftTap/tap'
import { ContentPage } from '../contentPage/innerContentPage'
export const Content = ()=> {
    return (
        <div className = "content">
            <LeftTap/>
            <InnerContent/>
        </div>
    )
}
let title = "대문"

const InnerContent = ()=> {
    const [preHtml] = useState('');
    return (
        <div className = "innerContent">
            <div className = "innerDiv">
                <div>
                    <p className = "contentTitle">{title}</p>
                    <hr className = "hr"/>
                    <ContentPage/>
                </div>
            </div>
        </div>
    )
}