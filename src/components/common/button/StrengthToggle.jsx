const StrengthToggle = ({ strength }) => {
  return (
    <div
      style={{
        width: "100%",
        border: "2px solid white",
        color: "white",
        padding: "5px",
        borderRadius: "55PX",
        textAlign: "center",
      }}
    >
      {strength}
    </div>
  );
};

export default StrengthToggle;
