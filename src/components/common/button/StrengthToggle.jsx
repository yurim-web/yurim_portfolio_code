import React, { useState } from "react";

const StrengthToggle = ({ strength }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        border: "2px solid white",
        padding: "10px 10px",
        borderRadius: "55px",
        textAlign: "center",
        marginTop: "10px",
        backgroundColor: isHovered ? "#FFEDBD" : "transparent",
        color: isHovered ? "black" : "white",

        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {strength}
    </div>
  );
};

export default StrengthToggle;
