import StrengthContentsBox from "../common/box/StrengthContentsBox";
import StrenthToggleBox from "../common/box/StrenthToggleBox";

const Strength = () => {
  return (
    <article
      className="strength"
      style={{
        width: "100%",
        maxWidth: "950px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <h1 style={{ color: "white", fontSize: "50px" }}>Strength.</h1>
      <StrenthToggleBox />
      <StrengthContentsBox />
    </article>
  );
};

export default Strength;
