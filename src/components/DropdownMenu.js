import React, { useState } from "react";

const DropdownMenu = ({ name, options, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-flex self-center w-30 text-center ">
      <div
        className=" hover:shadow-sm bg-white"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          id="menu"
          type="button"
          className="flex justify-center w-full rounded-md pl-4 py-2  text-primaryDarkest hover:focus:outline-none "
        >
          <span className="pr-1 justify-center items-center pt-[2px]">
            {" "}
            {icon}
          </span>
          {name}
          <svg
            className="justify-center mt-1 hover:text-secondary"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M5.3999 7.5L10.3999 12.5L15.3999 7.5"
              stroke="#265896"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            className="flex self-stretch items-center justify-center origin-top-right absolute right-0  rounded-md shadow-lg bg-white text-black ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              {options.map((option) => {
                return (
                  <a
                    className="block p-1 w-[152px] text-[14px] text-gray-500 font-bold hover:text-secondary"
                    role="menuitem"
                    href={option.href}
                  >
                    {option.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
