import "./css/background.css";

import { useEffect, useRef } from "react";
import Circle from "./components/common/shape/Circle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { triggers } from "./animation/triggers";
import { targets } from "./animation/targets";
import { motion } from "./animation/motion";
import MainSlideTexts from "./components/presentation/MainSlideTexts";
import Infobox from "./components/layout/Infobox";
import Strength from "./components/layout/Strength";
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

function App() {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: triggers.main,
      })
      .to("." + targets.textName, motion.slideToRightx)
      .to("." + targets.textFrontend, motion.slideToLeftx, "<")
      .to(".info", { y: -500 }, "<");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".strength",
          scrub: true,
          start: "top top",
          end: "bottom bottom",
          markers: true,
        },
      })
      .to(".three div", { rotateY: 0, stagger: 0.3 });
  }, []);

  return (
    <>
      <div className="main"></div>
      <div
        className="test"
        style={{
          backgroundColor: "black",
          width: "100%",
          paddingTop: "300px",
          height: "800px",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
          }}
        >
          <Circle />
          <MainSlideTexts />
        </section>
        <section
          className="info"
          style={{
            transform: "translateY(200px)",
            width: "100%",
            position: "relative",
            zIndex: "4",
          }}
        >
          <Infobox />
        </section>
      </div>
      <section
        style={{
          backgroundColor: "black",
          width: "100%",
        }}
      >
        <Strength />
      </section>
    </>
  );
}

export default App;
