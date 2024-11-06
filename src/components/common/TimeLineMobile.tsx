interface Props {
  numCircles?: number;
  circleSize?: number;
  circleSpacing?: number;
  circleColor?: string;
  textColor?: string;
  className?: string;
}

export const TimelineMobile: React.FC<Props> = ({
  numCircles = 5,
  circleSize = 21,
  circleSpacing = 60,
  circleColor = "bg-secondary-blue",
  textColor = "text-white",
  className = "",
}) => {
  const lineHeight = numCircles * circleSize + (numCircles - 1) * circleSpacing;

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div
        className={`absolute ${circleColor}`}
        style={{
          width: "0.9px",
          height: `${lineHeight}px`,
          top: "0",
        }}
      ></div>
      {Array.from({ length: numCircles }, (_, i) => (
        <div
          key={i}
          className="flex items-center"
          style={{
            marginBottom: i < numCircles - 1 ? `${circleSpacing}px` : "0",
          }}
        >
          <div
            className={`flex items-center justify-center ${circleColor} ${textColor} rounded-full z-10 text-xs`}
            style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
          >
            {i + 1}
          </div>
        </div>
      ))}
    </div>
  );
};
