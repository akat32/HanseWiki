import React, { Component } from 'react'
import './bar.scss'
import Logo from '../../assets/logo.png'

let title = "한세위키 : 대문"

export const TopBar = ()=> {
    return (
        <div className = "topBar">
            <div className = "logo">
                <img className="logoImg" src={Logo}/>
            </div>
            <div className = "innerTap">
                <span className = "title">{title}</span>
                <div className = "searchDiv">
                    <input id = "searchInput" type="text" placeholder = "한세위키 검색"/>
                    <button id = "searchBtn">
                        <div className = "icon"></div>
                    </button>
                    <button id = "goBtn">
                        <div className = "icon"></div>
                    </button>
                </div>
                <div>
                    <div className = "userBtn"></div>
                </div>
                <div className = "userMenu"></div>
            </div>
        </div>
    )
}