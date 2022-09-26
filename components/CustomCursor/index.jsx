import React from "react";

export const CustomCursor = () => {
  const cursorRef = React.useRef();

  React.useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current?.clientWidth / 2;
      const mouseY = clientY - cursorRef.current?.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return <div className="app-cursor" ref={cursorRef} />;
};
