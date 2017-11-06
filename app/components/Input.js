import React from 'react';

const Input = ({ className, placeholder, type, value, name, handleChange }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      name={name}
      onChange={e => handleChange(e)}
    />
  );
};

export default Input;
