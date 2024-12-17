const Infobox = () => {
  return (
    <article
      style={{
        borderRadius: "20px",
        width: "100%",
        backgroundColor: "#FFF9E8",
        maxWidth: "950px",
        margin: "0 auto",
        padding: "80px 50px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div>
        <h1 style={{ color: "#00adb4", fontSize: "50px", fontFamily: "Bold" }}>
          PROFILE
        </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          style={{
            borderRadius: "999px",
            backgroundColor: "#00adb4",
            width: "200px",
            height: "200px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          src="https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525041813796jqwe.jpg"
          alt=""
        />

        <div style={{ display: "flex", gap: "40px" }}>
          <div
            style={{
              width: "280px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <h1 style={{ borderBottom: "1px solid black", fontWeight: "bold" }}>
              ABOUT ME
            </h1>
            <p>NAME : 이유림</p>
            <p>BIRTH : 2000.11.04</p>
            <p>PHONE : 010.0000.0000</p>
            <p>EMAIL : lyl5152@naver.xom</p>
          </div>
          <div
            style={{
              width: "280px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <h1 style={{ borderBottom: "1px solid black" }}>EXPERIENCE</h1>
            <p>2024.01~2023.08 : (주)쇼엠</p>
            <p>2022.04~2023.06 : 웹디자이너</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <strong style={{ fontSize: "20px", color: "#00adb4", fontWeight: 700 }}>
          "웹 디자이너 경력을 바탕으로 사용자 경험을 최우선으로 생각하는
          프론트엔드 개발자입니다!"
        </strong>
        <p>
          디자인과 개발의 경계를 넘나들며 직관적이고 세련된 웹을 구현합니다.
        </p>
        <p>
          다양한 웹 디자인 프로젝트에서 얻은 경험을 통해 UI/UX의 중요성을 깊이
          이해하고 있습니다.
        </p>
        <p>
          최신 기술을 활용하여 빠르고 반응성이 뛰어난 웹 애플리케이션을
          개발합니다.
        </p>
      </div>
    </article>
  );
};

export default Infobox;
