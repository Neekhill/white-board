import { useLayoutEffect, useRef } from "react";

const Board = () => {
  const canvasRef = useRef(null);

  // before browser pain
  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
