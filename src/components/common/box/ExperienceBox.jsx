import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ExperienceBox = ({ title, date, detail }) => {
  return (
    <div style={{ perspective: "1000px" }}>
      <div
        className="para"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          transform: "rotateX(90deg)",
        }}
      >
        <p>
          <span
            style={{
              fontSize: "30px",
              fontWeight: 700,
              marginRight: "15px",
            }}
          >
            {title}
          </span>
          <span>{date}</span>
        </p>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default ExperienceBox;
