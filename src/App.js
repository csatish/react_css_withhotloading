import React from 'react'

import AppCSS from './CSS/App.scss'
import { hot } from 'react-hot-loader'
class App extends React.Component {

    render () {
        return (
            <div id="App">
                <h1>{"Jai baap"}</h1>
            </div>
        )
    }
}

export default hot(module)(App)