const OutlineText = ({ text }) => {
  return (
    <h1
      style={{
        fontSize: "145px",
        color: "transparent",
        webkitTextStroke: "3px   #00adb4",
      }}
    >
      {text}
    </h1>
  );
};

export default OutlineText;
