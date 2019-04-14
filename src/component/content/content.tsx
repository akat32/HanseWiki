import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";

import './content.scss'

import { LeftTap } from '../leftTap/tap'
import { ContentPage } from '../contentPage/innerContentPage'

import { Signin } from '../auth/Signin'
import { Signup } from '../auth/Signup'
export const Content = ()=> {
    return (
        <div className = "content">
            <LeftTap/>
            <InnerContent/>
        </div>
    )
}

const InnerContent = ()=> {
    const [title, SetTitle] = useState()
    useEffect (()=> {
        
    })
    return (
        <div className = "innerContent">
            <div className = "innerDiv">
                <Router>
                    <div>
                        <Route exact path = "/" component = {BigDoorPage}/>
                        <Route exact path = "/signin" component = {Signin} />
                        <Route exact path = "/signup" component = {Signup} />
                    </div>
                </Router>
            </div>
        </div>
    )
}

const BigDoorPage = ()=> {
    return (
        <ContentPage/>
    )
}