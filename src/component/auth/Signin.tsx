import React, { Component, useState, useEffect } from 'react'

import api from '../../api.json'
import './Signin.scss'

import axios from 'axios'
export const Signin = ()=> {
    const [id, setID] = useState()
    const [passwd, setPW] = useState()
    function writeID (event:any) {
        setID(event.target.value)
    }
    function writePW (event:any) {
        setPW(event.target.value)
    }
    async function login () {
        let url = api.url + 'passportin'
        let data = {
            id: id,
            passwd: passwd
        }
        try {
            let result = await axios.post(url, data);
            window.location.href = '/'
        }
        catch ( e ) {
            alert('아이디나 비밀번호가 틀렸습니다!');
            setID('')
            setPW('')
        }
    }
    return (
        <div className = "signin">
            <p className = "contentTitle">로그인</p>
            <hr className = "hr"/>
            <div className = "inputForm">
                <p>사용자 ID</p>
                <input type="text" placeholder="사용자 ID를 입력하세요" onChange = {writeID}/>
                <p>사용자 ID</p>
                <input type="password" placeholder="비밀번호를 입력하세요" onChange = {writePW}/><br/>
                <button className = "accept" onClick={login}>로그인</button>
            </div>
        </div>
    )
}