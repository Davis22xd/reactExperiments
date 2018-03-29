
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
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
  
    handleNameChange(e) {
		this.setState({ name: e.target.value });
	}
  
    handlePasswordChange(e) {
		this.setState({ password: e.target.value });
	}

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        alert('A value was submitted: ' + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <h2 id="loginHeader">Login</h2>
                <LabeledInput title={'Nombre'} inputType={'text'} value={this.state.name}  controlFunc={this.handleNameChange} required></LabeledInput>
                <LabeledInput title={'Contraseña'} inputType={'password'} value={this.state.password} controlFunc={this.handlePasswordChange} required></LabeledInput>
                <div className="buttonHolder">
                    <input id="logInSubmit" type="submit" value="Log In" />
                </div>
            </form>
        );
    }
}

export default LoginForm;