import React from 'react';

function InputComponent({ inputValue, handleChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputComponent;
