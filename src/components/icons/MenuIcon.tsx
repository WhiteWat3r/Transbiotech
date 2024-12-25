export const MenuIcon = ({
  color = "#929292",
  onClick,
}: {
  onClick: () => void;
  color: string;
}) => (
  <svg
    width="45"
    height="34"
    viewBox="0 0 45 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M3 3H41.6622"
      stroke={color}
      strokeWidth="5.5"
      strokeLinecap="round"
    />
    <path
      d="M3 16.7524H41.6622"
      stroke={color}
      strokeWidth="5.5"
      strokeLinecap="round"
    />
    <path
      d="M3 30.5H41.6622"
      stroke={color}
      strokeWidth="5.5"
      strokeLinecap="round"
    />
  </svg>
);
