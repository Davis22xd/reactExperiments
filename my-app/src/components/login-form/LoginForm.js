
import React from 'react';
import LabeledInput from './../labeled-input/LabeledInput';
import './loginForm.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        alert('A value was submitted: ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <h2 id="loginHeader">Login</h2>
                <LabeledInput title='Nombre' type='text'  required></LabeledInput>
                <LabeledInput title='Contraseña' type='password' required></LabeledInput>
                <div className="buttonHolder">
                    <input id="logInSubmit" type="submit" value="Log In" />
                </div>
            </form>
        );
    }
}

export default LoginForm;