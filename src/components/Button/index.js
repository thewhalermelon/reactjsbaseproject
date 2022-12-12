import React from 'react';
import { useNavigate } from "react-router-dom";

const Button = ({ title, value }) => {
  let navigate = useNavigate();

  return (
    <button onClick={() => navigate(parseInt(value))}>{title}</button>
  )
}

export default Button;
