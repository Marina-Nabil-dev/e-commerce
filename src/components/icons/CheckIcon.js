const CheckIcon = () => {
  return (
    <svg
    className="items-center justify-center important my-auto ml-2"
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      fill="none"
      class="MuiChip-icon MuiChip-iconMedium MuiChip-iconColorDefault"
    >
      <g clip-path="url(#check-circle-green_svg__a)">
        <path
          stroke="#17B26A"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.2"
          d="m5.8 8 2 2 4-4m3.667 2A6.667 6.667 0 1 1 2.133 8a6.667 6.667 0 0 1 13.334 0"
        ></path>
      </g>
      <defs>
        <clipPath id="check-circle-green_svg__a">
          <path fill="#fff" d="M.8 0h16v16H.8z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckIcon;
