import { useEffect } from "react";
import "./css/Wheel.css";
import { useRef } from "react";
import { useState } from "react";

function Wheel() {
  const [rotation, setRotation] = useState(0);

  const canvasRef = useRef(null);

  const segments = ["Segment1", "Segment2", "Segment3", "Segment4", "Segment5"];
  const colors = [
    "rgb(24, 59, 69)",
    "rgb(0, 168, 119)",
    "rgb(54, 117, 136)",
    "rgb(24, 59, 69)",
    "rgb(0, 168, 119)",
    "rgb(54, 117, 136)",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 50;

    // Draw the wheel
    const drawWheel = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      segments.forEach((segment, index) => {
        const angle = (index * 2 * Math.PI) / segments.length;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(
          centerX,
          centerY,
          radius,
          angle,
          angle + (2 * Math.PI) / segments.length
        );
        ctx.fillStyle = colors[index];
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = "10";
        // ctx.stroke();
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle + Math.PI / segments.length);
        ctx.textAlign = "right";
        ctx.fillStyle = "white";
        ctx.font = "16px poppins";
        ctx.fillText(segment, radius - 30, 10);
        ctx.restore();
      });

      // drawing the outer border
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = "#0c2340";
      ctx.lineWidth = "15";
      ctx.stroke();
    };

    drawWheel();
  });

  const RandomSpin = () => {
    const randomAngle = 2 * Math.PI * Math.random();
    const canvas = document.querySelector("canvas");

    canvas.style.transform = `${(180 * randomAngle) / 3.14}`;
  };

  return (
    <div className="WheelContainer">
      <canvas
        ref={canvasRef}
        className="Wheel"
        width={500}
        height={500}
      ></canvas>
      {/* Creating canvas overlap to center the SPIN button over the wheel */}
      <div className="canvasOverlap">
        <button onClick={RandomSpin} className="SpinButton">
          <p>SPIN</p>
        </button>
      </div>
    </div>
  );
}

export default Wheel;
