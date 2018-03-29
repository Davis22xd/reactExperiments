
import React from 'react';
import LabeledInput from './../labeled-input/LabeledInput';

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
            <form onSubmit={this.handleSubmit}>
                <LabeledInput title='Nombre: ' type='text' value={this.state.name} required></LabeledInput>
                <LabeledInput title='Contraseña: ' type='password' value={this.state.password} required></LabeledInput>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default LoginForm;