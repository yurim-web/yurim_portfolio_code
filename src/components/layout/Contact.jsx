import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoHappySharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [message, setMessage] = useState("");

  // 입력 내용이 변경될 때마다 상태 업데이트
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // 이메일 링크를 만들기 위한 함수
  const handleSendEmail = () => {
    const subject = "Contact Form Submission"; // 이메일 제목
    const body = encodeURIComponent(message); // 본문 내용을 URL 인코딩하여 이메일 본문에 넣음
    const email = "lyl5152@naver.com"; // 받는 사람 이메일 주소

    // mailto 링크를 동적으로 생성하여 클릭
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
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
      <h1 style={{ color: "white", fontSize: "50px", fontFamily: "Bold" }}>
        Contact.
      </h1>
      <h1 style={{ color: "#FFEDBD" }}>I HOPE YOU ENJOY MY PROJECT</h1>
      <div style={{ display: "flex", gap: "40px" }}>
        <input
          style={{
            width: "100%",
            color: "grey",
            borderRadius: "10px",
            padding: "10px",
          }}
          placeholder="내용을 입력해주세요"
          type="text"
          value={message}
          onChange={handleInputChange} // 입력값이 변경될 때마다 상태 업데이트
        />
        <button
          onClick={handleSendEmail} // 버튼 클릭 시 이메일 전송
          style={{
            backgroundColor: "#FFF9E8",
            padding: "20px 50px",
            color: "black",
            border: "none",
            borderRadius: "10px",
            fontSize: "20px",
          }}
        >
          SEND
        </button>
      </div>
      <div
        style={{
          color: "white",
          alignItems: "center",
          display: "flex",
          fontSize: "25PX",
        }}
      >
        <FaPhoneAlt />
        <span style={{ marginLeft: "15px" }}>010-4054-5152</span>
      </div>
      <div
        style={{
          color: "white",
          alignItems: "center",
          display: "flex",
          fontSize: "25PX",
        }}
      >
        <MdEmail />

        <span style={{ marginLeft: "15px" }}>lyl5152@naver.com</span>
      </div>
      <div
        style={{
          color: "white",
          alignItems: "end",
          display: "flex",
          fontSize: "50PX",
          justifyContent: "flex-end",
          marginTop: "100px",
        }}
      >
        <h1 style={{ color: "white" }}>Thank you </h1>
        <IoHappySharp />
      </div>
    </article>
  );
};

export default Contact;
