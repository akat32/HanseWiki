import React, { Component, useState, useEffect } from 'react'

import api from '../../api.json'
import './Signin.scss'

export const Signin = ()=> {
    return (
        <div className = "signin">
            <p className = "contentTitle">로그인</p>
            <hr className = "hr"/>
            <div className = "inputForm">
                <p>사용자 ID</p>
                <input type="text" placeholder="사용자 ID를 입력하세요"/>
                <p>사용자 ID</p>
                <input type="password" placeholder="비밀번호를 입력하세요"/><br/>
                <button className = "accept">로그인</button>
            </div>
        </div>
    )
}