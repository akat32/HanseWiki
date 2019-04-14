import React, { Component, useState, useEffect } from 'react'

import axios from 'axios'
import api from '../../api.json'

import './Signup.scss'

export const Signup = ()=> {
    return (
        <div className = "signup">
            <p className = "contentTitle">회원가입</p>
            <hr className = "hr"/>
            <div className = "inputForm">
                <p>사용자 ID</p>
                <input type = "text" placeholder="사용자 이름을 입력하세요"/>
                <p>비밀번호</p>
                <input type = "password" placeholder="비밀번호를 입력하세요"/>
                <p>비밀번호 재입력</p>
                <input type = "password" placeholder="비밀번호를 입력하세요"/>
                <p>닉네임</p>
                <input type = "text" placeholder = "닉네임을 입력하세요"/>
                <p>실명</p>
                <input type = "text" placeholder = "실제 이름을 입력하세요"/>
            </div>
            <div className = "precautions">

            </div>
            <div className = "chkPerson">

            </div>
        </div>
    )
}