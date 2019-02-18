import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Rounds Chat</h1>
        <p>Secure and fast healthcare chat. <br/>
        Sing up <a href="#signup">Today</a>.</p>
    </header>
)

export default Header
