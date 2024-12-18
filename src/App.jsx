import "./css/background.css";
import "./css/App.css";

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
import Carrer from "./components/layout/Carrer";
import Portfolio1 from "./components/layout/portfolio/Portfolio1";
import Portfolio2 from "./components/layout/portfolio/Portfolio2";
import Portfolio3 from "./components/layout/portfolio/Portfolio3";
import Portfolio4 from "./components/layout/portfolio/Portfolio4";
import Portfolio5 from "./components/layout/portfolio/Portfolio5";
import Cursor from "./components/common/Cursor";
import Contact from "./components/layout/Contact";

gsap.registerPlugin(ScrollTrigger);

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
          start: "top center",
          end: "bottom bottom",
        },
      })
      .to(".three div", { rotateY: 0, stagger: 0.3 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".exp",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })

      .to(".para", { opacity: 1, rotateX: 0, duration: 0.9, stagger: 1 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".exp2",
          start: "top center",
          end: "bottom center",

          scrub: true,
        },
      })
      .to(".para2", { opacity: 1, rotateX: 0, duration: 0.9, stagger: 1 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".portbox",
          start: "top top",
          end: "800% bottom",
          pin: true,
          scrub: 1,
        },
      })
      .to(".port2", { duration: 2, y: 0 })
      .to(".port3", { duration: 2, y: 0 })
      .to(".port4", { duration: 2, y: 0 })
      .to(".port5", { duration: 2, y: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".contactbox",
          start: "top top",
          end: "bottom bottom",
          pin: true,
        },
      })
      .to(".contact_detail", { duration: 1.5, y: 0, opacity: 1 });
  }, []);

  return (
    <>
      <Cursor />
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
          paddingTop: "200px",
        }}
      >
        <Strength />
      </section>

      <Carrer />
      <section
        className="portbox"
        style={{ width: "100%", position: "relative" }}
      >
        <Portfolio1 />
        <Portfolio2 />
        <Portfolio3 />
        <Portfolio4 />
        <Portfolio5 />
      </section>
      <section
        className="contactbox"
        style={{
          width: "100%",
          backgroundColor: "black",
          padding: "180px 0px 200px 0px",
        }}
      >
        <Contact />
      </section>
    </>
  );
}

export default App;
