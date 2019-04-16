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
                <p>약관 동의</p>
                <div className = "chkPerson">
                    <p>휴먼 테스트</p>
                    <input readOnly/>
                    <p>답변</p>
                    <input type="text"/>
                </div>
                <button className = "accept">가입</button>
            </div>
            <div className = "precautions">
                <p><span>2000</span>명이 한세위키를 사용중입니다!</p>
                <p><span>12</span>명의 관리자가 한세위키를 관리중입니다!</p>
                <p>총<span>1000</span>개의 문서가 있습니다!</p>
                <p>개발자는 보안 이외의 책임을 지지 않습니다.</p>
                <p>실명을 왜 받냐구요? 범죄 일어날까봐 무서워서요..</p>
            </div>
        </div>
    )
}