const Stack = ({ bgcolor, stack }) => {
  return (
    <div
      style={{
        color: "black",
        padding: "8px 15px",
        backgroundColor: bgcolor,
        borderRadius: "7px",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {stack}
    </div>
  );
};

export default Stack;
