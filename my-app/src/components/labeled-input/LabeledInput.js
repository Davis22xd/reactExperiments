import React from 'react';
import './labeledInput.css';

class LabeledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: this.state.value})
    }

    render() {
        return (
            <div>
                <label className="inputLabel">{this.props.title}:</label>
                <input className="inputElement" type={this.props.type}
                    value={this.state.value}
                    required={this.props.required} 
                    onChange={this.handleChange}/>
            </div>

        );
    }
}

export default LabeledInput;