import ImgBox from "../../common/box/ImgBox";
import PortfolioBox from "../../common/box/PortfolioBox";
import Stack from "../../common/button/Stack";

const Portfolio1 = () => {
  return (
    <section
      className="port1"
      style={{
        width: "100%",
        backgroundColor: "#ff540f",
        height: "600px",
        color: "white",
        padding: "100px 0px 250px 0px",
        position: "absoulte",
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
         
          <ImgBox img={"강남언니.png"}/>
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
              강남언니 클론코딩
            </h1>
            <div
              style={{
                width: "100%",
                height: "3px",
                backgroundColor: "white",
              }}
            ></div>
            
            <PortfolioBox title={"제작기간"} value={"2024.10.25 ~ 2024.10.28"} />
            <PortfolioBox title={"참여도"} value={"개인 100%"} />
            <PortfolioBox
              title={"내용"}
              value={
                "이 웹사이트는 강남언니 공식 사이트의 PC 버전을 클론 코딩한 작품입니다. HTML과 CSS만을 사용하여 메인 페이지와 두 개의 서브페이지를 구성하고, 직관적인 디자인으로 강남언니 웹사이트를 재현했습니다."
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
            <a
              style={{ cursor: "hand" }}
              href="https://yurim-web.github.io/gangnam/index.html"
            >
              <button
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  padding: "20px",
                  border: "none",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  fontSize: "20px",
                  marginTop: "60px",
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

export default Portfolio1;
