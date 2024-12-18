import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setpostion] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setpostion({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    document.body.style.cursor = "none";
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "50px",
        height: "50px",
        pointerEvents: "none",
        transform: "trnaslate(-50%, -50%)",
        zIndex: "9999",
        // borderRadius: "9999px",
        // border: "2px solid white",
        backgroundImage: `url("mousecursor.png")`,
        backgroundSize: "cover",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default Cursor;
