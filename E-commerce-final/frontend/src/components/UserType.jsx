import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserType.css"; // Import the CSS file

const UserType = () => {
  const navigate = useNavigate();

  const handleUserSelection = (userType) => {
    if (userType === "farmer") {
      navigate("/home"); // Redirect to Farmer's Home
    } else if (userType === "customer") {
      navigate("/home1"); // Redirect to Customer's Home
    }
  };

  return (
    <div className="user-type-container">
      <div className="content-wrapper">
        <h1 className="title">Welcome to AgriConnect</h1>
        <p className="subtitle">Who are you?</p>
      </div>
      <div className="button-container">
        {/* Farmer Option */}
        <div className="user-option" onClick={() => handleUserSelection("farmer")}>
          <div className="user-image">
            <img
              src="/images/farmer.jpeg" // Path to Farmer image
              alt="Farmer Icon"
              className="icon-image"
            />
          </div>
          <button className="user-button farmer-button">Farmer</button>
        </div>
        {/* Customer Option */}
        <div className="user-option" onClick={() => handleUserSelection("customer")}>
          <div className="user-image">
            <img
              src="/images/customer.png" // Path to Customer image
              alt="Customer Icon"
              className="icon-image"
            />
          </div>
          <button className="user-button customer-button">Customer</button>
        </div>
      </div>
    </div>
  );
};

export default UserType;
