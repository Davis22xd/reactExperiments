
import React from 'react';
import './loginForm.css';
import InputLabeler from './../input-labeler/InputLabeler';

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
                <InputLabeler title={'Username'}>
                <input type="text" value={this.state.name}  onChange={this.handleNameChange} required/>
                </InputLabeler>    
                <InputLabeler title={'Password'}>
                <input type="password" value={this.state.password}  onChange={this.handlePasswordChange} required/>
                </InputLabeler>  
                <div className="buttonHolder">
                    <input id="logInSubmit" type="submit" value="Log In" />
                </div>
            </form>
        );
    }
}

export default LoginForm;