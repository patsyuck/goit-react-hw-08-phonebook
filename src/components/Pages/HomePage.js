import React from 'react'
import './Page.css'

const emoji = String.fromCodePoint(0x1F621)

const HomePage = () => {
    <div className="home">
        <h1 className="homeTitle">
            WELCOME {emoji}
        </h1>
    </div>
}

export default HomePage