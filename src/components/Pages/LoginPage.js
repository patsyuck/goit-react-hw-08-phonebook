import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postLogin } from '../../redux/authorization/authorizationActions'
import './Page.css'

class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({[name]: value})
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onLogin(this.state)
        this.setState({email: '', password: ''})
     }
    
    render() {
        const { email, password } = this.state
        
        return (
            <div>
                <h1>Login Page</h1>
                <form
                    className="form"
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                >
                    <label className="formLabel">
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className="formLabel">
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    onLogin: postLogin
}

export default connect(null, mapDispatchToProps)(LoginPage)