import React, { Component } from 'react'

import { Content } from '../content/content'
import { TopBar } from '../topBar/bar'

export const Main = ()=> {
    return (
        <div>
            <TopBar/>
            <Content/>
        </div>
    )
}