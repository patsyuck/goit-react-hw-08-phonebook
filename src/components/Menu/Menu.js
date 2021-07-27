import React from 'react'
import Navigation from './Navigation'
import UserMenu from './UserMenu'
import Authorization from './Authorization'
import './Menu.css'

const Menu = ({ isAuthorized }) => {
    return (
        <header className="menuHeader">
            <Navigation />
            {isAuthorized ? <UserMenu /> : <Authorization />}
        </header>
    )
}

export default Menu