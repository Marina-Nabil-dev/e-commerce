import React from "react";
// import "../styles/navbar.css"; // Import your CSS file
import DropdownMenu from "../components/DropdownMenu";
import AuctionIcon from "../components/icons/AuctionIcon";
import BuyNowIcon from "../components/icons/BuyNowIcon";
import HelpIcon from "../components/icons/HelpIcon";
import { FaGavel } from 'react-icons/fa'; // Example icon for Auctions

function App() {
  const auctionOptions = [
    { name: "Upcoming Auctions", href: "#" },
    { name: "Live Auctions", href: "#" },
  ];
  const buyNow = [
    {
      name: "Buy Now",
      href: "#",
    },
    {
      name: "Finance Options",
      href: "#",
    },
  ];

  const help = [
    {
      name: "Contact Us",
      href: "#",
    },
    {
      name: "FAQ",
      href: "#",
    },
    {
      name: "How It Works",
      href: "#",
    },
  ];

  return (
    <div className="flex w-full px-8 py-4 justify-start items-start gap-5 self-stretch">
      <div className="flex flex-col items-start mt-2">
        <img src="/home/logo.png" alt="logo image" />
        <p className="text-xs text-white">First Online Auction in Egypt</p>
      </div>

      <div className="flex flex-row items-center self-stretch gap-5 px-[56px]">
        <DropdownMenu
          name="Auctions"
          options={auctionOptions}
          icon={<AuctionIcon/>}
        />

        <DropdownMenu name="Buy Now" options={buyNow} icon={<BuyNowIcon/>} />

        <button className="inline-flex relative text-left">
          <span className="pr-1">
            <svg
              className="w-5 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M15.2873 2.34399C16.0913 1.51359 17.4196 1.50285 18.2369 2.32014C19.0318 3.11503 19.0466 4.39918 18.2703 5.21218L15.9547 7.63698C15.7732 7.82704 15.6825 7.92207 15.6265 8.03337C15.577 8.1319 15.5476 8.23927 15.5399 8.34927C15.5312 8.47352 15.5607 8.60156 15.6198 8.85763L17.0597 15.0973C17.1204 15.3601 17.1507 15.4915 17.1409 15.6187C17.1323 15.7312 17.1008 15.8408 17.0485 15.9408C16.9895 16.0538 16.8941 16.1491 16.7033 16.3399L16.3944 16.6489C15.8892 17.154 15.6367 17.4065 15.3782 17.4523C15.1525 17.4922 14.9203 17.4374 14.7362 17.3007C14.5255 17.1442 14.4125 16.8054 14.1866 16.1277L12.5118 11.1033L9.72408 13.891C9.55767 14.0575 9.47447 14.1407 9.41881 14.2386C9.36951 14.3254 9.3362 14.4204 9.32048 14.519C9.30273 14.6303 9.31572 14.7472 9.34171 14.9811L9.4948 16.3589C9.52079 16.5928 9.53378 16.7098 9.51604 16.821C9.50031 16.9196 9.467 17.0146 9.4177 17.1014C9.36204 17.1994 9.27884 17.2826 9.11243 17.449L8.94785 17.6136C8.55363 18.0078 8.35652 18.2049 8.13748 18.262C7.94536 18.312 7.74167 18.2919 7.5631 18.2051C7.35951 18.1062 7.20488 17.8742 6.89563 17.4104L5.5887 15.4499C5.53345 15.3671 5.50582 15.3256 5.47375 15.2881C5.44526 15.2547 5.41418 15.2236 5.3808 15.1951C5.34321 15.163 5.30178 15.1354 5.2189 15.0801L3.2585 13.7732C2.79462 13.464 2.56269 13.3093 2.46375 13.1057C2.37698 12.9272 2.35681 12.7235 2.40688 12.5314C2.46396 12.3123 2.66107 12.1152 3.05529 11.721L3.21988 11.5564C3.38628 11.39 3.46948 11.3068 3.56747 11.2512C3.65427 11.2018 3.74922 11.1685 3.84781 11.1528C3.95909 11.1351 4.07603 11.1481 4.30993 11.174L5.68775 11.3271C5.92164 11.3531 6.03859 11.3661 6.14987 11.3484C6.24845 11.3327 6.34341 11.2993 6.43021 11.25C6.52819 11.1944 6.6114 11.1112 6.7778 10.9448L9.56557 8.157L4.54117 6.4822C3.86348 6.25631 3.52464 6.14336 3.36814 5.9326C3.23149 5.74857 3.17667 5.51637 3.2166 5.29066C3.26232 5.03216 3.51488 4.7796 4.02 4.27448L4.32897 3.96551C4.51972 3.77476 4.61509 3.67939 4.72809 3.62031C4.82809 3.56803 4.93768 3.5366 5.0502 3.52793C5.17733 3.51814 5.30875 3.54847 5.5716 3.60913L11.7875 5.04358C12.0458 5.10318 12.175 5.13299 12.2997 5.12412C12.4201 5.11556 12.5372 5.08095 12.6428 5.02269C12.7523 4.96234 12.8445 4.86712 13.0289 4.67667L15.2873 2.34399Z"
                stroke="#FCFCFD"
                strokeWidth="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <a href="#">Import Now</a>
        </button>

        <DropdownMenu name="Help" options={help} icon={<HelpIcon/>} />

        <button className="inline-flex relative text-left">
          <span className="pr-1">
            <svg
              className="w-5 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M13.8333 4.99992H16.3333C16.5543 4.99992 16.7663 5.08772 16.9226 5.244C17.0788 5.40028 17.1666 5.61224 17.1666 5.83325V14.9999C17.1666 15.4419 16.9911 15.8659 16.6785 16.1784C16.3659 16.491 15.942 16.6666 15.5 16.6666M15.5 16.6666C15.058 16.6666 14.634 16.491 14.3215 16.1784C14.0089 15.8659 13.8333 15.4419 13.8333 14.9999V4.16659C13.8333 3.94557 13.7455 3.73361 13.5892 3.57733C13.433 3.42105 13.221 3.33325 13 3.33325H4.66665C4.44563 3.33325 4.23367 3.42105 4.07739 3.57733C3.92111 3.73361 3.83331 3.94557 3.83331 4.16659V14.1666C3.83331 14.8296 4.09671 15.4655 4.56555 15.9344C5.03439 16.4032 5.67027 16.6666 6.33331 16.6666H15.5ZM7.16665 6.66659H10.5M7.16665 9.99992H10.5M7.16665 13.3333H10.5"
                stroke="#FCFCFD"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <a href="#">Biddex's News</a>
        </button>
        <div className="flex items-center px-[56px]">
          <button className="flex relative text-right  px-4 py-2  bg-white border border-primary text-primary rounded-full font-bold">
            <span>
              <svg
                className="h-6 w-5 pr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.8334 4.16667C10.8334 5.08714 8.78133 5.83333 6.25002 5.83333C3.71872 5.83333 1.66669 5.08714 1.66669 4.16667M10.8334 4.16667C10.8334 3.24619 8.78133 2.5 6.25002 2.5C3.71872 2.5 1.66669 3.24619 1.66669 4.16667M10.8334 4.16667V5.41667M1.66669 4.16667V14.1667C1.66669 15.0871 3.71872 15.8333 6.25002 15.8333M6.25002 9.16667C6.10957 9.16667 5.97059 9.16437 5.83335 9.15987C3.49731 9.08332 1.66669 8.3694 1.66669 7.5M6.25002 12.5C3.71872 12.5 1.66669 11.7538 1.66669 10.8333M18.3334 9.58333C18.3334 10.5038 16.2813 11.25 13.75 11.25C11.2187 11.25 9.16669 10.5038 9.16669 9.58333M18.3334 9.58333C18.3334 8.66286 16.2813 7.91667 13.75 7.91667C11.2187 7.91667 9.16669 8.66286 9.16669 9.58333M18.3334 9.58333V15.8333C18.3334 16.7538 16.2813 17.5 13.75 17.5C11.2187 17.5 9.16669 16.7538 9.16669 15.8333V9.58333M18.3334 12.7083C18.3334 13.6288 16.2813 14.375 13.75 14.375C11.2187 14.375 9.16669 13.6288 9.16669 12.7083"
                  stroke="#1E4678"
                  strokeWidth="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Sell Your Car
          </button>

          <button className="flex relative text-left px-[28px] font-bold">
            <span className="pr-1">
              <svg
                className="w-5 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_7753_7398)">
                  <path
                    d="M9.99996 1.66675C12.0844 3.94871 13.2689 6.91011 13.3333 10.0001C13.2689 13.0901 12.0844 16.0515 9.99996 18.3334M9.99996 1.66675C7.91556 3.94871 6.731 6.91011 6.66663 10.0001C6.731 13.0901 7.91556 16.0515 9.99996 18.3334M9.99996 1.66675C5.39759 1.66675 1.66663 5.39771 1.66663 10.0001C1.66663 14.6025 5.39759 18.3334 9.99996 18.3334M9.99996 1.66675C14.6023 1.66675 18.3333 5.39771 18.3333 10.0001C18.3333 14.6025 14.6023 18.3334 9.99996 18.3334M2.08331 7.50008H17.9166M2.08329 12.5001H17.9166"
                    stroke="#FCFCFD"
                    strokeWidth="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7753_7398">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <a href="#">العربية</a>
          </button>

          <button className="flex relative text-left font-bold">
            <span className="pr-1">
              <svg
                className="w-5 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_7753_7205)">
                  <path
                    d="M4.43021 16.1988C4.93714 15.0044 6.12073 14.1667 7.49996 14.1667H12.5C13.8792 14.1667 15.0628 15.0044 15.5697 16.1988M13.3333 7.91675C13.3333 9.7577 11.8409 11.2501 9.99996 11.2501C8.15901 11.2501 6.66663 9.7577 6.66663 7.91675C6.66663 6.0758 8.15901 4.58341 9.99996 4.58341C11.8409 4.58341 13.3333 6.0758 13.3333 7.91675ZM18.3333 10.0001C18.3333 14.6025 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6025 1.66663 10.0001C1.66663 5.39771 5.39759 1.66675 9.99996 1.66675C14.6023 1.66675 18.3333 5.39771 18.3333 10.0001Z"
                    stroke="#FCFCFD"
                    strokeWidth="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_7753_7205">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <a href="#">Sign In</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
