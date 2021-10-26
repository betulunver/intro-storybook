import React from 'react'
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({ label, type, placeholder, ...props }) => {
    return (
        <div className="input-with-label">
            {label ? <label>{label}</label> : ""}
            <input
                type={type}
                placeholder={placeholder}
                {...props}
            />
        </div>
    )
}

export default Input

Input.propTypes = {

    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder:PropTypes.string
};

Input.defaultProps = {
    type: "text",
};
