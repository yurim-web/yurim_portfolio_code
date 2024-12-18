import { FaHome } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";

const Infobox = () => {
  return (
    <article
      style={{
        borderRadius: "20px",
        width: "100%",
        backgroundColor: "#FFF9E8",
        maxWidth: "950px",
        margin: "0 auto",
        padding: "80px 60px",
        display: "flex",
        flexDirection: "column",
        gap: "90px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div>
        <h1 style={{ color: "#00adb4", fontSize: "50px", fontFamily: "Bold" }}>
          PROFILE
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "250px",
            height: "250px",
            objectFit: "contain",
          }}
          src="myimg.png"
          alt=""
        />

        <div style={{ display: "flex", gap: "40px" }}>
          <div
            style={{
              width: "280px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              lineHeight: "1.5",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaHome size={30} />
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                ABOUT ME
              </h1>
            </div>

            <div
              style={{ width: "100%", height: "2px", backgroundColor: "black" }}
            ></div>
            <p>NAME : 이유림</p>
            <p>BIRTH : 2000.11.04</p>
            <p>PHONE : 010.4054.5152</p>
            <p>EMAIL : lyl5152@naver.com</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          <div
            style={{
              width: "280px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              lineHeight: "1.5",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IoIosSchool size={30} />
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                MY EDUCATION
              </h1>
            </div>

            <div
              style={{ width: "100%", height: "2px", backgroundColor: "black" }}
            ></div>
            <p>
              웹(퍼블리셔) 프론트엔드(Javascript,React) 양성과정 350시간 수료
            </p>
            <p>청운대학교(인천캠) 멀티미디어학과 졸업</p>
            <p>인천논현고등학교 졸업</p>
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
        <strong style={{ fontSize: "25px", color: "#00adb4", fontWeight: 700 }}>
          "웹 디자이너 경력을 바탕으로 사용자 경험을 최우선으로 생각하는 웹
          퍼블리셔 입니다!"
        </strong>
        <div style={{ lineHeight: "1.6", marginTop: "15px" }}>
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
      </div>
    </article>
  );
};

export default Infobox;
