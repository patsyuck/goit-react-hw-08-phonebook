import React from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation'
import UserMenu from './UserMenu'
import Authorization from './Authorization'
import {getToken} from '../../redux/authorization/authorizationSelectors'
import './Menu.css'

const Menu = ({ isAuthorized }) => {
    return (
        <header className="menuHeader">
            <Navigation />
            {isAuthorized ? <UserMenu /> : <Authorization />}
        </header>
    )
}

const mapStateToProps = state => {
  return {
    isAuthorized: getToken(state)
  };
};

export default connect(mapStateToProps, null)(Menu)