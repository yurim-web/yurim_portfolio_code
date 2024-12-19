import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";

// APPLE 클론 코딩 포트폴리오

const Portfolio2 = () => {
  return (
    <section
      className="port2"
      style={{
        width: "100%",
        backgroundColor: "#dcdcd0",
        height: "600px",
        color: "black",
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
          <ImgBox img={"애플.png"} />
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
              APPLE 클론 코딩
            </h1>
            <div
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "black",
              }}
            ></div>
            <PortfolioBox
              title={"제작기간"}
              value={"2024.10.29 ~ 2024.11.02"}
            />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "이 웹사이트는 Apple 공식 사이트의 PC 버전을 클론 코딩하여 만든 작품입니다. React를 활용해 메인 페이지를 구성하고, 직관적인 디자인으로 Apple의 웹사이트를 세심하게 재현했습니다."
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
                <Stack stack={"React"} bgcolor={"#FFF0C0"} />
              </div>
            </div>
            <a
              style={{ cursor: "hand" }}
              href="https://yurim-web.github.io/apple_clone_page2/"
            >
              {" "}
              <button
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  marginTop: "20px",
                  fontSize: "20PX",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                LINK
              </button>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Portfolio2;
