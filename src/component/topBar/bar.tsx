import React, { Component, useState, useEffect } from 'react'
import './bar.scss'
import Logo from '../../assets/logo.png'

let title = "한세위키 : 대문"

export const TopBar = ()=> {
    const [userMenu, SetMenu] = useState()
    const [menuDisplay, setDisplay] = useState("none")
    function display () {
        if ( menuDisplay === "none") setDisplay("block")
        else setDisplay("none")
    }
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
                    <div className = "userBtn" onClick = {display}></div>
                </div>
                <div className = "userMenu" style = {{display: menuDisplay}}>
                    <div className = "triangle"></div>
                    <div className = "menu"></div>
                </div>
            </div>
        </div>
    )
}