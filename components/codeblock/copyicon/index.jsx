export const CopyIcon = ({ height = "1em", width = "1em", ...etcProps }) => {
  return (
    <svg
      {...etcProps}
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>
  );
};
