import React, { Component, useState, useEffect } from 'react'
import './bar.scss'
import Logo from '../../assets/logo.png'

import api from '../../api.json'

import axios from 'axios'

let title = "한세위키 : 대문"

export const TopBar = ()=> {
    const [userID, SetID] = useState()
    const [isLogined, setLogined] = useState()
    const [userSign, SetSign] = useState()
    const [regi, setRegi] = useState()
    const [menuDisplay, setDisplay] = useState("none")
    const [link1, setLink1] = useState()
    const [link2, setLink2] = useState()
    function display () {
        if ( menuDisplay === "none") setDisplay("block")
        else setDisplay("none")
    }
    async function loadUser () {
        let url = api.url + 'isauth'
        try {
            let result = await axios.get(url);
            SetID(result.data.user.name)
            SetSign("로그아웃")
            setRegi('내 정보 수정')
            setLink1('/sign')
            setLink2('/sign')
            setLogined(true)
        }
        catch (e) {
            SetID("Please login!")
            SetSign("로그인")
            setRegi('회원가입')
            setLink1('/signin')
            setLink2('/signup')
            setLogined(false)
        }
    }
    useEffect(() => {
        loadUser()
    })
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
                    <div className  = "tri"></div>
                    <div className = "menu">
                        <a href = {link1}>
                            <div className = "logined">
                                {userID}
                            </div>
                        </a>
                        <a href = {link2}>
                            <div className = "fix">
                                {regi}
                            </div>
                        </a>
                        <a href = {link1}>
                            <div className = "sign">
                                {userSign}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}