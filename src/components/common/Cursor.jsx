import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setpostion] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setpostion({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    document.body.style.cursor = "none";
    // return () => {
    //   window.removeEventListener("mousemove", onMouseMove);
    //   document.body.style.cursor = "auto";
    // };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "100px",
        height: "100px",
        // backgroundColor: "white",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "trnaslate(-50%, -50%)",
        zIndex: "9999",
        backgroundImage: `url("mousecursor.png")`,
        backgroundSize: "cover",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default Cursor;
