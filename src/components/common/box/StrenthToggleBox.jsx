import StrengthToggle from "../button/StrengthToggle";

const StrenthToggleBox = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <StrengthToggle strength={"HTML"} />
      <StrengthToggle strength={"CSS"} />
      <StrengthToggle strength={"Javascript"} />
      <StrengthToggle strength={"React"} />
      <StrengthToggle strength={"Next.js"} />
      <StrengthToggle strength={"Gsap.js"} />
      <StrengthToggle strength={"API"} />
      <StrengthToggle strength={"Git/Github"} />
      <StrengthToggle strength={"Notion"} />
      <StrengthToggle strength={"Photoshop"} />
      <StrengthToggle strength={"Illustrator"} />
    </div>
  );
};

export default StrenthToggleBox;
