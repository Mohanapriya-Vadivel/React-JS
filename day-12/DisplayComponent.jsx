import React from 'react';

function DisplayComponent({ inputValue }) {
  return (
    <div>
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default DisplayComponent;
