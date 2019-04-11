import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import './notice.scss'
 
import api from '../../../../api.json'
interface NoticeProps {
    index: Object
}

const obj = <p>sdasdasd</p>
let list = [
    { "index" : <span>환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
    { "index" : <span>환영합니다!</span> },
]
export const Notice = ()=> {
    const [data, setData] = useState()
    async function axiosAPI(url: string) {
        let result = await axios.post(url, { category: 1} )
        let obj = result.data.obj;
        setData(obj);
        return result.data.obj;
    }
    useEffect( ()=> {
        let url = api.url + "loadContent"
        axiosAPI(url);
    });
    return (
        <>
            {data}
        </>
        // <ul className = "innerNotice">
        //     { list.map ( i => (<NoticeList index={i.index}/>))}
        // </ul>
    )
}
const NoticeList = (props:NoticeProps)=> {
    return (
        <li className = "innerLi">
            {props.index}
        </li>
    )
}