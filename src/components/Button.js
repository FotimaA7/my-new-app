import React from 'react';
import '../styles/Button.css';  // Import the CSS file

const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
}

export default Button;
