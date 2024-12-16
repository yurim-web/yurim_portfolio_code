const StrengthContents = ({ contents }) => {
  return (
    <div className="three" style={{ perspective: "1000px", width: "100%" }}>
      <div
        style={{
          border: "2px solid #00adb4",
          borderRadius: "20px",
          transform: "rotateY(90deg)",
          transition: "all 0.5s ease",
          padding: "30px",
          color: "white",
        }}
      >
        {contents}
      </div>
    </div>
  );
};

export default StrengthContents;
