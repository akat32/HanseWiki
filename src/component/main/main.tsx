import React, { Component } from 'react'

import { TopBar } from '../topBar/bar'
import { Content } from '../content/content'

export const Main = ()=> {
    return (
        <div>
            <TopBar/>
            <Content/>
        </div>
    )
}