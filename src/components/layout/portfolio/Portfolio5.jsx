import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";

const Portfolio5 = () => {
  return (
    <section
      className="port5"
      style={{
        width: "100%",
        backgroundColor: "#21d3d3",
        height: "600px",
        color: "white",
        padding: "100px 0px 200px 0px",

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
          <img
            style={{ width: "400px", height: "600px", objectFit: "cover" }}
            src="강남언니.png"
            alt=""
          />
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
              API를 활용한 영화
            </h1>
            <div
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "white",
              }}
            ></div>
            <PortfolioBox title={"제작기간"} value={"2024.10.22~2024.11.05"} />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                " 강남언니 공식 사이트를 클론코딩하여 만든 적응형 PC버전 웹사이트 입니다."
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
              </div>
            </div>
            <button
              style={{
                width: "100%",
                height: "60px",
                borderRadius: "10px",
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                fontSize: "20PX",
                marginTop: "60px",
              }}
            >
              LINK
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Portfolio5;
