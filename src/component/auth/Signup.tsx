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
                <input type = "password" placeholder="비밀번호를 재입력하세요"/>
                <p>닉네임</p>
                <input type = "text" placeholder = "닉네임을 입력하세요"/>
                <p>실명</p>
                <input type = "text" placeholder = "실제 이름을 입력하세요"/>
                <br/>
                <button className = "accept">가입</button>
            </div>
            <div className = "precautions">
                <p className = "pppp">총 <span>2000</span>명이 한세위키를 사용중입니다!</p>
                <div className = "Admin">
                    <p className = "pp"><span>12</span>명</p>
                    <p className = "ppp">관리자</p>
                </div>
                <div className = "user">
                    <p className = "pp"><span>1188</span>명</p>
                    <p className = "ppp">사용자</p>
                </div>
                <div className = "write">
                    <p className = "pp"><span>1000</span>개</p>
                    <p className = "ppp">문서</p>
                </div>
                <div className = "blabla">
                <p>본 개발자는 보안 이외의 책임을 지지 않습니다.</p>
                <p>본 개발자는 업데이트 이외의 관리를 하지 않습니다.</p>
                <p>실명을 왜 받냐구요? 범죄 일어날까봐 무서워서요..</p>
                <p>하지만 실명을 인증할 방법이 없습니다!</p>
                <p>문제가 생기면 인증이 귀찮을 것 같다고 뺀 "김우혁" 잘못입니다.</p>
                </div>
            </div>
        </div>
    )
}