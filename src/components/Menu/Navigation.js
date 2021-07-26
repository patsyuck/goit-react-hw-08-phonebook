import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
    link: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: 12,
        fontWeight: 700,
        color: 'black'
    },
    activeLink: {
        color: 'red'
    }
}

const Navigation = () => {
    <div>
        <NavLink
            to="/" exact
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            Home
        </NavLink>
        <NavLink
            to="/contacts" exact
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            Contacts
        </NavLink>
    </div>
}

export default Navigation