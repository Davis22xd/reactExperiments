import React, { Component } from 'react';
import LoginForm from './../login-form/LoginForm';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faLaptop from '@fortawesome/fontawesome-free-solid/faLaptop'
import './loginContainer.css';

class LoginContainer extends Component {

    render() {
        return (
            <div id="loginContainer">
                <header>
                    <FontAwesomeIcon id="upperLogo" icon={faLaptop} size='3x'/>
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