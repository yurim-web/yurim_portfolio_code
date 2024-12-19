const ImgBox = ({ img }) => {
  return (
    <div style={{ width: "900px", height: "600px" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top ",

          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        src={img}
        alt=""
      />
    </div>
  );
};

export default ImgBox;
