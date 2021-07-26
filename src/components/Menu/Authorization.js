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

const Authorization = () => {
    <div>
        <NavLink
            to="/register" exact
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            Registration
        </NavLink>
        <NavLink
            to="/login" exact
            style={styles.link}
            activeStyle={styles.activeLink}
        >
            Login
        </NavLink>
    </div>
}

export default Authorization