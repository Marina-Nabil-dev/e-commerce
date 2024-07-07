import React, { useState } from "react";

const DropdownMenu = ({ name, options, icon }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-flex self-center w-30 text-left">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
    
        
        <button
          id="menu"
          type="button"
          className="flex justify-center w-full rounded-md pl-4 py-2  text-white hover: focus:outline-none"
        >
            <span className="pr-1"> {icon}</span>
          {name}
          <svg className="ml-1 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M5.5 7.5L10.5 12.5L15.5 7.5"
              stroke="#FCFCFD"
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
                    className="block px-2 w-[152px] text-sm text-primary hover:bg-gray-100 hover:text-secondary font-bold"
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
