export function GoDaddyLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="200" height="60" fill="#1BDBDB" rx="4"/>
      <text
        x="100"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="bold"
        fill="#000000"
        textAnchor="middle"
      >
        GoDaddy
      </text>
    </svg>
  );
}
