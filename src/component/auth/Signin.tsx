import React, { Component, useState, useEffect } from 'react'

import api from '../../api.json'
import './Signin.scss'

import fetch from 'node-fetch'

import axios from 'axios'
import { string } from 'prop-types';

export const Signin = ()=> {
    const [id, setID] = useState()
    const [passwd, setPW] = useState()
    function writeID (event:any) {
        console.log(event.keypress)
        setID(event.target.value)
    }
    function enterChk (event:any) {
        if(event.keyCode === 13) login()
    }
    function writePW (event:any) {
        setPW(event.target.value)
    }
    const loginFetch = async (url: string, obj: Object): Promise<any> => {
        return new Promise(resolve => {
            fetch(url, obj)
            .then(body => {
                resolve(body);
            })
        })
    }
    async function login () {
        let url = api.url + 'passportin'
        let data = {
            id: id,
            passwd: passwd
        }
        try {
            console.log(id, passwd)
            let obj = {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            let result = await loginFetch(url, obj)
            console.log(result)
            alert('success')
            // window.location.href = '/'
            result = await axios.get(api.url + 'isauth')
            console.log(result)
            alert('헤헤')
        }
        catch ( e ) {
            alert('아이디나 비밀번호가 틀렸습니다!');
        }
    }
    return (
        <div className = "signin">
            <p className = "contentTitle">로그인</p>
            <hr className = "hr"/>
            <div className = "inputForm">
                <p>사용자 ID</p>
                <input type="text" placeholder="사용자 ID를 입력하세요" onChange = {writeID}/>
                <p>비밀번호</p>
                <input type="password" placeholder="비밀번호를 입력하세요" onChange = {writePW} onKeyDown = {enterChk}/><br/>
                <button className = "accept" onClick={login}>로그인</button>
            </div>
        </div>
    )
}