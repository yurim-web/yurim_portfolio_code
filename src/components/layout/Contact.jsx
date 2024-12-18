import { useState } from "react";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoHappySharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <article
      className="contact_detail"
      style={{
        width: "100%",
        maxWidth: "950px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        opacity: 0,
        transform: "translateY(100px)",
      }}
    >
      <h1 style={{ color: "white", fontSize: "50px", fontFamily: "Bold" }}>
        Contact.
      </h1>
      <h1 style={{ color: "#FFEDBD" }}>I HOPE YOU ENJOY MY PROJECT</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <div
            style={{
              color: "white",
              alignItems: "center",
              display: "flex",
              fontSize: "25px",
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
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="https://github.com/">
              <FaGithub color="white" size={70} />
            </a>
            <a href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338586&extra_1=s%7Cc%7C547419126419%7Ce%7Cinstagram%20%27%7C&placement=&creative=547419126419&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338586%26adgroupid%3D126262418054%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9196518%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=EAIaIQobChMIwKSVsMawigMVaQ57Bx152wCSEAAYASAAEgJHkfD_BwE">
              <FaSquareInstagram color="white" size={70} />
            </a>
          </div>
        </div>

        <img
          style={{ width: "200px", borderRadius: "10PX" }}
          src="sns.jpg"
          alt=""
        />
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
