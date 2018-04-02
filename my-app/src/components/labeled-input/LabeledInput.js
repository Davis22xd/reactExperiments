import React from 'react';
import PropTypes from 'prop-types';
import './labeledInput.css';

const LabeledInput = (props) => (
  <div>
    <label className="inputLabel">{props.title}:</label>
    <input className="inputElement" type={props.inputType}
      value={props.value}
      required={props.required}
      onChange={props.onChange} />
  </div>
);

LabeledInput.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number', 'password']).isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
};

export default LabeledInput;  