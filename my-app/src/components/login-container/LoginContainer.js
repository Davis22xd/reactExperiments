import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                    <this.props.rendererComponent />
                </div>
                <footer>
                    <img src="./../images/FooterBackground.png" alt="Footer Background" />
                    <img src="./../images/logo.png" alt="Logo" />
                </footer>
            </div>
        )
    }
}
LoginContainer.propTypes = {
    rendererComponent: PropTypes.element
}
LoginContainer.defaultProps = {
    rendererComponent: LoginForm
}

export default LoginContainer;