const PortfolioBox = ({ value, title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0px",
        padding: "15px 0px",
      }}
    >
      <h3 style={{ fontSize: "20px", width: "40%" }}>{title}</h3>
      <p style={{ width: "80%" }}>{value}</p>
    </div>
  );
};

export default PortfolioBox;
