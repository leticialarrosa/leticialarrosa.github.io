const AbstractLines = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(8 75% 55%)" stopOpacity="0.8" />
          <stop offset="50%" stopColor="hsl(15 85% 45%)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(8 75% 55%)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {/* Concentric ellipses */}
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={i}
          cx={200 + i * 20}
          cy={400}
          rx={80 + i * 40}
          ry={40 + i * 20}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          opacity={0.6 - i * 0.06}
          className="animate-draw"
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
            animationDelay: `${i * 0.2}s`,
          }}
          transform={`rotate(-15 ${200 + i * 20} 400)`}
        />
      ))}

      {/* Flowing curves */}
      <path
        d="M0 600 Q 300 400, 600 500 T 1200 400"
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        opacity="0.4"
        className="animate-draw"
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
          animationDelay: "0.5s",
        }}
      />
      <path
        d="M0 700 Q 400 500, 800 600 T 1200 500"
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="1"
        opacity="0.3"
        className="animate-draw"
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
          animationDelay: "0.8s",
        }}
      />

      {/* Spiral effect */}
      <path
        d="M150 350 Q 200 300, 250 350 Q 300 400, 250 450 Q 200 500, 150 450 Q 100 400, 150 350"
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        opacity="0.6"
        className="animate-draw"
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
          animationDelay: "1s",
        }}
      />
    </svg>
  );
};

export default AbstractLines;
