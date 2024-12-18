import React, { useState } from "react";

const StrengthContents = ({ contents, skill, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="three"
      style={{ perspective: "1000px", width: "100%", color: "white" }}
    >
      <div
        className="content-container"
        style={{
          border: "2px solid #00adb4",
          borderRadius: "20px",
          transform: "rotateY(90deg)",
          transition: "all 0.5s ease",
          padding: "40px 30px",
          position: "relative",
          marginTop: "30px",
          backgroundColor: isHovered ? "#FFF9E8" : "transparent",
          color: isHovered ? "black" : "white",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            lineHeight: "1.5",
            fontSize: "15px",
          }}
        >
          <img
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
            src={img}
            alt=""
          />
          {contents}
        </div>

        <div
          style={{
            backgroundColor: "#00adb4",
            border: "2px solid #00adb4",
            borderRadius: "10px",
            padding: "10px",
            width: "130px",
            textAlign: "center",
            position: "absolute",
            top: "-20px",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          {skill}
        </div>
      </div>
    </div>
  );
};

export default StrengthContents;
