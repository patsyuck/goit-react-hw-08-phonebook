import React from 'react'
import './Menu.css'

const UserMenu = ({ avatar, name, onLogout }) => {
    return (
        <div className="menuUser">
            <img className="userImage" src={avatar} alt="" width="32"/>
            <span className="userName">Welcome, {name}</span>
            <button type="button" onClick={onLogout}>
                Logout
            </button>
        </div>
    )
}

export default UserMenu