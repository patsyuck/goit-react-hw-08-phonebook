import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { getToken } from '../../redux/authorization/authorizationSelectors'

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

const Navigation = ({ isAuthorized }) => {
    return (
        <div>
            <NavLink
                to="/" exact
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                Home
            </NavLink>
            {isAuthorized && (
                <NavLink
                    to="/contacts" exact
                    style={styles.link}
                    activeStyle={styles.activeLink}
                >
                    Contacts
                </NavLink>
            )}
        </div>
    )
}

const mapStateToProps = state => {
  return {
    isAuthorized: getToken(state)
  };
};

export default connect(mapStateToProps, null)(Navigation)