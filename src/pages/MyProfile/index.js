import React from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  let navigate = useNavigate();

  let onReturnHome = (e) => {
    console.log("hoang123");
    e.stopPropagation();
    navigate("/initial-page");
  };

  return (
    <div>
      <h3>This is my profile</h3>
      <button onClick={onReturnHome}>go back</button>
    </div>
  );
};

export default MyProfile;
