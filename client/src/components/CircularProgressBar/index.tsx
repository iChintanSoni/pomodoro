import React, { useEffect } from "react";

interface CircularProgressBarProps {
  progress: number;
  text: string;
  radius: number;
  strokeWidth: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  radius = 32,
  strokeWidth = 4,
  progress: input,
  text,
}) => {
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offsetAngle = -90; // Start progress at -90 degrees
  const strokeDashoffset =
    circumference - ((input / 100) * circumference + offsetAngle / 360);

  useEffect(() => {
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
      progressBar.style.transition = "stroke-dashoffset 1s linear";
      progressBar.style.strokeDashoffset = `${strokeDashoffset}`;
    }
  }, [input, strokeDashoffset]);

  return (
    <div style={{ position: "relative" }}>
      <svg height={radius * 2} width={radius * 2}>
        <style>
          {`
             .text {
                 font-family: 'Montserrat', sans-serif;
                 font-weight: 500;
                 font-size: 32px;
                 letter-spacing: 0.15px;
             }
           `}
        </style>
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="transparent"
          stroke="#FFF"
          strokeOpacity={0.5}
          strokeWidth={strokeWidth}
        />
        <circle
          id="progress-bar"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="transparent"
          stroke="#FFF"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset="0"
          transform={`rotate(${offsetAngle} ${radius} ${radius})`}
        />
        <text
          x={radius}
          y={radius}
          className="text"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#FFF"
          fontSize="20"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;