import React from 'react';
import { useNavigate } from "react-router-dom";

const Button = ({ value, className, children }) => {
  let navigate = useNavigate();

  return (
    <button className={`btn ${className}`} onClick={() => navigate(parseInt(value))}>{children}</button>
  )
}

export default Button;
