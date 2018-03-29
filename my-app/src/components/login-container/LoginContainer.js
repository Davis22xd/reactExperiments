import React, { Component } from 'react';
import LoginForm from './../login-form/LoginForm';
import './loginContainer.css'

class LoginContainer extends Component {

    render() {
        return (
            <div id="loginContainer">
                <header>
                    <img id="upperLogo" src={require('./../../images/logo.png')} alt="Logo" />
                    <h1>PSF Monitor Station</h1>
                </header>
                <div id="mainArea">
                    <LoginForm/>
                </div>
                <div id="footer">
                    <img id="footerLogo" src={require('./../../images/logo.png')} alt="Logo" />
                </div>
            </div>
        )
    }
}

export default LoginContainer;