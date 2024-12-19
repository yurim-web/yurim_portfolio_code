import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";

// Wavvey 포트폴리오

const Portfolio5 = () => {
  return (
    <section
      className="port5"
      style={{
        width: "100%",
        backgroundColor: "#77E4C8",
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
          <ImgBox img={"waveyy.png"} />

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
              Waveyy
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
              value={"2024.12.01 ~ 2024.12.12"}
            />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "이 웹사이트는 Next.js와 영화·드라마 API를 활용해 기획하고 만든 영화, 드라마 정보 사이트입니다. 다양한 영화와 드라마의 정보를 직관적으로 탐색할 수 있는 기능과 페이지 이동 기능을 제공합니다."
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
                <Stack stack={"Next.js"} bgcolor={"#FFDDC0"} />
              </div>
            </div>
            <a
              style={{ cursor: "hand" }}
              href="https://movie-api-portfolio.vercel.app/"
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

export default Portfolio5;
