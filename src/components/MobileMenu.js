import { useState } from "react";
import LoginModal from "./auth/Login";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchIcon from "./icons/SearchIcon";
import { Link } from "react-router-dom";
import { HomeRoutes } from "./../routes/home";
import ModalManager from "./auth/AuthModals";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    if (!e.target.closest(".menu-container")) {
      setIsOpen(false);
    }
  };

  const handleLoginModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setOpenLoginModal(true);
  };

  return (
    <>
      <div className="relative">
        {/* Button to open menu */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden px-3 py-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Sliding dialog */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ transition: "transform 0.3s ease" }}
        >
          <div className="py-3 px-2 justify-between items-center">
            <div className="px-2 py-1 flex rounded-lg border-[1px] border-gray-300 justify-start items-start">
              <Link
                to={HomeRoutes.SEARCH}
                className="flex justify-center items-center"
                onClick={(e) => closeMenu(e)}
              >
                <SearchIcon />
                <span className="ml-2">Search</span>
              </Link>
            </div>
            <a
              href="#"
              onClick={() => openModal("login")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign in
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Finance options
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Contact us
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Biddex's News
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              How it works
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Frequently Asked Questions
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              العربية
            </a>
          </div>
        </div>
      </div>
      {openLoginModal && (
        <ModalManager modalType={"login"}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default MobileMenu;
