import React from 'react';

function UserCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

export default UserCard;
