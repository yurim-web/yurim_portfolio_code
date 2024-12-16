import StrenthToggleBox from "../common/box/StrenthToggleBox";
import StrengthContents from "../common/shape/StrengthContents";

const Strength = () => {
  return (
    <article
      className="strength"
      style={{
        width: "100%",
        maxWidth: "950px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <h1 style={{ color: "white", fontSize: "50px" }}>Strength.</h1>
      <StrenthToggleBox />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "30px",
        }}
      >
        <StrengthContents
          contents={
            "redux, redux saga, recoil 등의 상태관리 라이브러리 사용 경험이 있습니다. next.js를 활용한 SSR 개발 경험이 있습니다."
          }
        />
        <StrengthContents
          contents={
            "redux, redux saga, recoil 등의 상태관리 라이브러리 사용 경험이 있습니다. next.js를 활용한 SSR 개발 경험이 있습니다."
          }
        />
        <StrengthContents
          contents={
            "redux, redux saga, recoil 등의 상태관리 라이브러리 사용 경험이 있습니다. next.js를 활용한 SSR 개발 경험이 있습니다."
          }
        />
        <StrengthContents
          contents={
            "redux, redux saga, recoil 등의 상태관리 라이브러리 사용 경험이 있습니다. next.js를 활용한 SSR 개발 경험이 있습니다."
          }
        />
        <StrengthContents
          contents={
            "redux, redux saga, recoil 등의 상태관리 라이브러리 사용 경험이 있습니다. next.js를 활용한 SSR 개발 경험이 있습니다."
          }
        />
        <StrengthContents contents={"능력에 대해 적기"} />
        <StrengthContents contents={"능력에 대해 적기"} />
        <StrengthContents contents={"능력에 대해 적기"} />
        <StrengthContents contents={"능력에 대해 적기"} />
        <StrengthContents contents={"능력에 대해 적기"} />
        <StrengthContents contents={"능력에 대해 적기"} />
        <StrengthContents contents={"능력에 대해 적기"} />
        <StrengthContents contents={"능력에 대해 적기"} />
      </div>
    </article>
  );
};

export default Strength;
