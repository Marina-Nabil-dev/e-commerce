import React, { useEffect, useRef, useState } from "react";
import MobileMenu from "../components/MobileMenu";
import DropdownMenu from "./../components/DropdownMenu";
import DropDownItems from "../components/DropDownItems";
import { Link } from "react-router-dom";
import { HomeRoutes } from "../routes/home";
import LoginModal from "../components/auth/Login";
import ModalComponent from './../components/Modals/ModalComponent';

export default function Navbar() {
  const inputRef = useRef(null);
  const [isScrollerd, setIsScrolled] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  useEffect(() => {
    window.scrollY > 100 ? setIsScrolled(true) : setIsScrolled(false);
  }, []);

  const handleSubmittingForm = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <>
      <div className="bg-white  p-[10px_110px]">
        <div
          className="container mx-auto flex flex-wrap items-center 
      justify-between"
        >
          <div className="flex items-center lg:w-4/6 md:w-2/3 gap-7">
            <Link to={HomeRoutes.Home}>
              <img
                src="/home/logo.png"
                alt="BIDDEX Logo"
                className="h-5 w-28"
              />
            </Link>
            <span className="text-[14px] font-bold text-primary ml-4">
              العربية
            </span>
            <div
              className="flex justify-start p-[10px_14px] mx-2 gap-2 self-stretch border-2 rounded-md
             border-grayLighter items-center w-full"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="search-sm">
                  <path
                    id="Icon"
                    d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>

              <form className="w-full" onSubmit={handleSubmittingForm}>
                {" "}
                <input
                  type="text"
                  ref={inputRef}
                  id="search"
                  placeholder="Search by make or model"
                  className="w-full hover:bg-white text-black focus:border-none focus:outline-none"
                />
              </form>
            </div>
          </div>
          <div className=" flex sm:hidden md:hidden items-center lg:flex lg:w-2/6 md:w-1/3 justify-between self-stretch">
            <div className="relative"></div>
            <button
              className="flex ml-4 px-2 py-2 gap-2  text-primary font-bold"
              onClick={() => openModal("register")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="user-01">
                  <path
                    id="Icon"
                    d="M16.6666 17.5C16.6666 16.337 16.6666 15.7555 16.5231 15.2824C16.1999 14.217 15.3662 13.3834 14.3009 13.0602C13.8277 12.9167 13.2462 12.9167 12.0832 12.9167H7.91659C6.75362 12.9167 6.17213 12.9167 5.69897 13.0602C4.63363 13.3834 3.79995 14.217 3.47678 15.2824C3.33325 15.7555 3.33325 16.337 3.33325 17.5M13.7499 6.25C13.7499 8.32107 12.071 10 9.99992 10C7.92885 10 6.24992 8.32107 6.24992 6.25C6.24992 4.17893 7.92885 2.5 9.99992 2.5C12.071 2.5 13.7499 4.17893 13.7499 6.25Z"
                    stroke="#265896"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              Log In
            </button>
            <button className="ml-4 px-4 py-2 rounded-full bg-primary text-white font-bold">
              Sell your Product
            </button>
          </div>
          <MobileMenu />
        </div>
        <span className="border-b-grayDarkest rounded-sm"></span>
      </div>
      <hr className="border-b-[1px] border-grayLighter" />

      <div className="bg-white shadow-md text-primaryDarkest p-[10px_90px] transition-all duration-300  sticky top-0 lg:flex sm:hidden z-50 ">
        <div className="container mx-auto grid grid-flow-col grid-cols-5">
          {" "}
          {DropDownItems.map((item) => (
            <DropdownMenu
              key={item.id}
              name={item.name}
              icon={item.icon}
              options={item.options}
            />
          ))}
        </div>
      </div>

      {isModalOpen && <ModalComponent
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalType={modalType}
        showImage={true}
        modalProps={
          {
            /* pass any additional props here */
          }
        }
      
      />
      }
    </>
  );
}
