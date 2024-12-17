import EductionBox from "../common/box/EductionBox";
import ExperienceBox from "../common/box/ExperienceBox";

const Carrer = () => {
  return (
    <section
      className="carrer"
      style={{
        padding: "300px 0px 200px 0px",
        backgroundColor: "black",
        color: "white",
        width: "100%",
      }}
    >
      <article
        className="exp"
        style={{
          width: "100%",
          maxWidth: "950px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <div
          style={{
            padding: " 120px 80px 140px 80px",
            borderWidth: " 0px 0px 0px 7px",
            borderStyle: "solid",
            borderColor: " rgb(200, 75, 49)",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: " rgb(200, 75, 49)",
              width: "70px",
              height: "8px",
              position: "absolute",
              left: "-10px",
              bottom: "22px",
              transform: "rotate(-40deg)",
            }}
          ></div>
          {/* 화살표 막대기 */}

          <ExperienceBox
            title={"(주)쇼엠"}
            date={"2024.01~2024.08"}
            detail={"플랫폼 운영팀 - 웹 페이지, 앱 디자인 및 기획"}
          />
          <ExperienceBox
            title={"(주)오라코퍼레이션"}
            date={"2022.04~2023.06"}
            detail={"콘텐츠팀 - 콘텐츠 기획 및 디자인 등"}
          />
        </div>
        <div
          style={{
            backgroundColor: " rgb(200, 75, 49)",
            width: "300px",
            padding: "5px 0px",
            fontWeight: 700,
            textAlign: "center",
            fontSize: "40px",
            position: "absolute",
            fontFamily: "Bold",
          }}
        >
          EXPERIENCE
        </div>
      </article>
      <article
        className="exp2"
        style={{
          width: "100%",
          maxWidth: "950px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            padding: " 120px 80px 140px 80px",
            borderWidth: " 0px 7px 0px 0px",
            borderStyle: "solid",
            borderColor: " rgb(200, 75, 49)",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: " rgb(200, 75, 49)",
              width: "70px",
              height: "8px",
              position: "absolute",
              right: "-10px",
              bottom: "22px",
              transform: "rotate(40deg)",
              alignItems: "flex-end",
            }}
          ></div>

          <EductionBox
            title={"웹(퍼블리셔) 프론트엔드 (javascript, React) 양성과정 수료"}
            date={"2024.01~2024.08"}
          />
          <EductionBox title={"컴퓨터그래픽스운용기능사"} date={"2023.09"} />
          <EductionBox title={"TOEIC Speaking Test(120)"} date={"2023.09"} />
          <EductionBox title={"GTQ포토샵1급"} date={"2020.09"} />
          <EductionBox
            title={"디지털정보활용능력(DIAT) 스프레드시트 고급"}
            date={"2012.03"}
          />
          <EductionBox
            title={"디지털정보활용능력(DIAT) 워드프로세서 초급"}
            date={"2011.07"}
          />
          <EductionBox
            title={"정보기술자격(ITQ) 한글파워포인트"}
            date={"2010.03"}
          />
        </div>
        <div
          style={{
            backgroundColor: " rgb(200, 75, 49)",
            width: "520px",
            padding: "5px 0px",
            fontWeight: 700,
            textAlign: "center",
            fontSize: "40px",
            position: "absolute",
            fontFamily: "Bold",
          }}
        >
          LICENSE & EDUCATION
        </div>
      </article>
    </section>
  );
};

export default Carrer;
