interface LogoIconProps {
  size?: number;
  className?: string;
}

export default function LogoIcon({ size = 36, className }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left arm — lower outer face (dark navy) */}
      <polygon points="5,93 29,93 39,57 19,57" fill="#1e3a8a" />
      {/* Left arm — upper face (medium blue) */}
      <polygon points="19,57 39,57 50,8" fill="#1d4ed8" />
      {/* Left arm — inner shadow sliver (deep blue-black, creates depth) */}
      <polygon points="39,57 50,8 44,30" fill="#172554" />
      {/* Right arm — upper face (bright cyan) */}
      <polygon points="50,8 56,30 61,57 81,57" fill="#22d3ee" />
      {/* Right arm — lower outer face (medium teal) */}
      <polygon points="61,57 81,57 95,93 71,93" fill="#06b6d4" />
      {/* Crossbar (teal) */}
      <polygon points="39,57 61,57 60,69 40,69" fill="#0891b2" />
    </svg>
  );
}
