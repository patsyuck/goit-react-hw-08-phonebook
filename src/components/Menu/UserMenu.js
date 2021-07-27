import React from 'react'
import { connect } from 'react-redux'
import { postLogout } from '../../redux/authorization/authorizationActions'
import { getName } from '../../redux/authorization/authorizationSelectors'
import './Menu.css'
import image from './mine.jpg'

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

const mapStateToProps = state => {
  return {
    name: getName(state),
    avatar: image
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(postLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)