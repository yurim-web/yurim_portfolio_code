import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";

const Portfolio6 = () => {
  return (
    <section
      className="port6"
      style={{
        width: "100%",
        backgroundColor: "#030514",
        height: "600px",
        color: "white",
        padding: "100px 0px 250px 0px",
        position: "absolute",

        transform: "translateY(1000px)",
        top: "0px",
      }}
    >
      <article
        style={{
          width: "100%",
          maxWidth: "950px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <h1 style={{ fontSize: "50px", fontFamily: "Bold" }}>PORTFOLIO.</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "90px",
          }}
        >
          <ImgBox img={"avenger.png"}/>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h1
              style={{
                fontSize: "30px",
                textAlign: "left",
                fontWeight: 700,
              }}
            >
              AVENGERS.
            </h1>
            <div
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "white",
              }}
            ></div>
            <PortfolioBox title={"제작기간"} value={"2024.11.06 ~ 2024.11.13"} />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "이 웹사이트는 GSAP.js를 활용한 애니메이션 효과를 통해 어벤져스 캐릭터들을 다채롭게 소개하는 포트폴리오 웹사이트입니다. 매끄러운 애니메이션과 함께 각 캐릭터의 특징을 생동감 있게 표현했습니다."
              }
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
                padding: "15px 0px",
              }}
            >
              <h3 style={{ fontSize: "20px", width: "40%" }}>기술스텍</h3>
              <div
                style={{
                  width: "80%",
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: "9px",
                }}
              >
                <Stack stack={"HTML"} bgcolor={"#FFC0C1"} />
                <Stack stack={"CSS"} bgcolor={"#C0D6FF"} />
                <Stack stack={"Javascript"} bgcolor={"#C3FFC0"} />
                <Stack stack={"Gsap.js"} bgcolor={"#C0FFF0"} />
              </div>
            </div>
            <a  style={{ cursor: "hand" }} href="https://yurim-web.github.io/avengers_portfolio/">     <button
              style={{
                width: "100%",
                padding: "20px",
                borderRadius: "10px",
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                marginTop: "20px",
                fontSize: "20PX",
                backgroundColor: "white",
                color: "black",
              }}
            >
              LINK
            </button></a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Portfolio6;
