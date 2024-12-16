import StrengthToggle from "../button/StrengthToggle";

const StrenthToggleBox = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <StrengthToggle strength={"Html/Css"} />
      <StrengthToggle strength={"Javascript"} />
      <StrengthToggle strength={"React"} />
      <StrengthToggle strength={"Next.js"} />
      <StrengthToggle strength={"GSAP.js"} />
      <StrengthToggle strength={"Git/Github"} />
      <StrengthToggle strength={"Photoshop"} />
      <StrengthToggle strength={"Illustrator"} />
      <StrengthToggle strength={"Figma"} />
    </div>
  );
};

export default StrenthToggleBox;
