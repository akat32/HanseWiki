import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";

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
    return (
        <div className = "innerContent">
            <div className = "innerDiv">
                <p className = "contentTitle">{title}</p>
                <hr className = "hr"/>
                <Router>
                    <div>
                        <Route exact path = "/" component = {BigDoorPage}/>
                        <Route exact path = "/aa" component = {SomeContent}/>
                    </div>
                </Router>
            </div>
        </div>
    )
}

const BigDoorPage = ()=> {
    return (
        <div>
            <ContentPage/>
        </div>
    )
}
const SomeContent = ()=> {
    return (
        <div>
            asdasdasd
        </div>
    )
}