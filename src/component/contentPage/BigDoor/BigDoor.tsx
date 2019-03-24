import React, { Component } from 'react'
import './BigDoor.scss'
import Hanse from '../../../assets/hanse.jpg'

import { Notice } from './notice/notice'
import { Characteristic } from './characteristic/characteristic'
import { Chat } from './chat/chat'
import { Club } from './club/club'
import { Councli } from './Council/Council'
import { Department } from './department/department'
import { Game } from './game/game'
import { Guideline } from './guideline/guideline'
import { Incident } from './Incident/incident'
import { Inpra } from './inpra/inpra'

export const BigDoor = ()=> {
    return (
        <div className = "BigDoor">
            <div className = "welcome">
                <hr/>
                <p className = "welcomeP"><span className = "fontC">한세위키 </span>방문을 환영합니다!</p>
                <hr/>
            </div>
            <div className = "introduceSchool">
                <div className = "schoolIndex">
                    <p className = "title">한세사이버보안고등학교</p>
                    <p className = "Etitle">Hansei Cyber Security High School</p>
                    <p className = "Htitle">翰世사이버保安高等學校</p>
                    <img className = "schoolImg" src={Hanse}/>
                </div>
                <div className = "schoolContents">
                    <div className = "contents">
                        <p className = "listTitle">교훈</p>
                        <p className = "listIndex">바른 마음 갖고 큰 사람 되자</p>
                    </div>
                    <div className = "contents">
                        <p className = "listTitle">개교</p>
                        <p className = "listIndex">1994년 10월 05일</p>
                    </div>
                    <div className = "contents">
                        <p className = "listTitle">유형</p>
                        <p className = "listIndex">특성화 고등학교</p>
                    </div>
                    <div className = "contents">
                        <p className = "listTitle">성별</p>
                        <p className = "listIndex">유사 남녀공학</p>
                    </div>
                    <div className = "contents">
                        <p className = "listTitle">학교 법인</p>
                        <p className = "listIndex">윤당학원</p>
                    </div>
                    <div className = "contents">
                        <p className = "listTitle doubleLine">학생 수</p>
                        <p className = "listIndex">375명<br/>(2018학년도 기준)</p>
                    </div>
                    <div className = "contents">
                        <p className = "listTitle doubleLine">교직원 수</p>
                        <p className = "listIndex">49명<br/>(2018학년도 기준)</p>
                    </div>
                    <div className = "contents">
                        <p className = "listTitle doubleLine">상징</p>
                        <p className = "listIndex">교목 : 은행나무<br/>교화 : 매화</p>
                    </div>
                    <div className = "contents">
                        <p className = "listTitle doubleLine">관할 교육청</p>
                        <p className = "listIndex">서울특별시교육청<br/>(서울특별시서부교육청)</p>
                    </div>
                    <div className = "contents noneline">
                        <p className = "listTitle">소재지</p>
                        <p className = "listIndex ">서울특별시 마포구 마포대로11길 44-80</p>
                    </div>
                </div>
                <p className = "links"><a href="http://www.hansei.org/index.do">홈페이지</a> / <a href="https://www.schoolinfo.go.kr/?HG_CD=B100000662">학교알리미</a></p>
            </div>
            <div className = "listandNotice">
                <div className = "contentsList">
                    <p className = "mockCha">목차</p>
                    <ul className = "contentList">
                        <li><a>1. 공지사항</a></li>
                        <li><a>2. 특징</a></li>
                        <li><a>3. 위키 이용자를 위한 지침</a></li>
                        <li><a>4. 학과</a></li>
                        <li><a>5. 교가</a></li>
                        <li>
                            <a>6. 인프라</a>
                            <ul className = "inpra">
                                <li><a>6-1. 시설</a></li>
                                <li><a>6-2. 한세의 먹을거리</a></li>
                                <li><a>6-3. 주변 환경</a></li>
                                <li><a>6-4. IT인프라</a></li>
                            </ul>
                        </li>
                        <li><a>7. 프로젝트</a></li>
                        <li><a>8. 사건</a></li>
                        <li><a>9. 부서</a></li>
                        <li><a>10. 인물</a></li>
                        <li><a>11. 동아리</a></li>
                        <li><a>12. 학생회</a></li>
                        <li><a>13. 학생 특성 분류</a></li>
                        <li><a>14. 게임</a></li>
                        <li><a>15. 기타</a></li>
                        <li><a>16. 채팅방</a></li>
                    </ul>
                </div>
                <div className = "Notice">
                    <span className = "title">공지사항</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                    <Notice/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">특징</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                    <Characteristic/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">위키 이용자를 위한 지침</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                    <Guideline/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">학과</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                    <Department/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">교가</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">인프라</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                    <Inpra/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">프로젝트</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">사건</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                    <Incident/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">부서</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">인물</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">동아리</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                    <Club/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">학생회</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                    <Councli/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">학생 특성 분류</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">게임</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                    <Game/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">기타</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                </div>
                <div className = "contentListDiv">
                    <span className = "title">채팅방</span>
                    <span className = "edit"> [<a>편집</a>]</span>
                    <hr/>
                    <Chat/>
                </div>
            </div>
        </div>
    )
}