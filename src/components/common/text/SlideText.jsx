import Layer from "../layer/Layer";
import OutlineText from "./OutlineText";
import SolidlineText from "./SolidlineText";

const SlideText = ({ className, text, justifyContent }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        justifyContent: justifyContent,
      }}
    >
      <Layer className={className} zIndex={3}>
        <OutlineText className={className} text={text} />
      </Layer>
      <Layer className={className} zIndex={1}>
        <SolidlineText className={className} text={text} />
      </Layer>
    </div>
  );
};

export default SlideText;
