const StrengthContents = ({ contents }) => {
  return (
    <div
      className="three"
      style={{ perspective: "1000px", width: "100%", color: "white" }}
    >
      <div
        style={{
          border: "2px solid #00adb4",
          borderRadius: "20px",
          transform: "rotateY(90deg)",
          transition: "all 0.5s ease",
          padding: "40px 30px",
          color: "white",
          position: "relative",
          marginTop: "30px",
        }}
      >
        {contents}
        <div
          style={{
            backgroundColor: "#00adb4",
            border: "2px solid #00adb4",
            borderRadius: "10px",
            padding: "10px",
            width: "80px",
            textAlign: "center",
            position: "absolute",
            top: "-20px",
            transform: "rotate(-10deg)",
          }}
        >
          skill
        </div>
      </div>
    </div>
  );
};

export default StrengthContents;
