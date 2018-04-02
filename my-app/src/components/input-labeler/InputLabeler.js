import React from 'react';
import PropTypes from 'prop-types';
import './InputLabeler.css';

const InputLabeler = (props) => (
  <div className="inputContainer">
    <label className="inputLabel">{props.title}:</label>
    {props.children}
  </div>
);

InputLabeler.propTypes = {
  title: PropTypes.string.isRequired
};

export default InputLabeler;  