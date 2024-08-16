import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import RegisterModal from "./Register";
import PasswordEye from "../icons/PasswordEye";

export default function LoginModal({ isOpen, closeModal, showImage }) {
  const [isRegisterModalOpen, setOpenRegisterModal] = useState(false);
  console.log(isRegisterModalOpen);
  

  const handleOpenRegitserModal = (e) => {
    e.preventDefault();

    setOpenRegisterModal(true);    
    closeModal();
  };
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        id="login-modal"
        className="fixed inset-0 z-50 flex items-center justify-center w-full"
      >
        <DialogBackdrop className="fixed inset-0 bg-grayDarker bg-opacity-70  backdrop-blur-[2px]" />
        <DialogPanel
          className={`relative bg-white rounded-lg shadow-xl p-0 ${
            showImage ?? "w-full"
          } max-w-4xl flex overflow-hidden`}
        >
          {/* Left side - Form */}

          <div className="flex flex-col p-5">
            <div className="flex justify-start w-6">
              <img
                className="border-[1px] border-grayDarker p-1 rounded-full cursor-pointer"
                src="/home/x-close.svg"
                alt="Biddex Logo"
                onClick={closeModal}
              />
            </div>
            <div className="px-10 ml-10">
              <div className="flex justify-between items-center">
                <img src="/home/logo.png" alt="Biddex Logo" />
              </div>
              <h2 className="text-md mt-8">Phone number or email</h2>
              <div className="mt-2 mb-4 flex">
                <span className="inline-flex items-center px-3 bg-gray-200 text-gray-700 rounded-l-md">
                  +20
                </span>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="1287748574"
                />
              </div>
              <h2 className="text-lg font-bold mt-4">Password</h2>
              <div className="mt-2 mb-4 relative">
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="********"
                />
                <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
                  <PasswordEye />
                </span>
              </div>
              <a
                href="#"
                className="flex text-primary font-bold justify-end items-end mx-auto"
              >
                Forget Password
              </a>
              <button className="w-full mt-6 font-bold bg-primary text-white py-2 px-4 rounded-full hover:bg-primaryDarker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Login
              </button>
              <div className="text-center mt-4">
                <p className="text-grayLight">Or</p>
                <button className="w-full mt-4 flex justify-center items-center bg-white text-gray-700 py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-100">
                  <img
                    src="/home/google.svg"
                    alt="Google Logo"
                    className="h-6 pr-2"
                  />
                  Sign in with Google
                </button>
              </div>
              <p className="mt-4 text-center text-gray-500">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-primary font-bold"
                  onClick={handleOpenRegitserModal}
                >
                  Create a new account
                </a>
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          {showImage && (
            <div
              className="w-1/2 bg-cover bg-right flex relative"
              style={{ backgroundImage: `url('/home/loginImage.png')` }}
            >
              <div className=" justify-end p-8  text-white">
                <h2 className="text-3xl font-bold">Welcome back to Biddex</h2>
                <p className="mt-4 text-lg">
                  Login to continue to your next step
                </p>
              </div>
            </div>
          )}
        </DialogPanel>
      </Dialog>
      {isRegisterModalOpen && (
        <RegisterModal
          isOpen={isRegisterModalOpen}
          closeRegisterModal={() => setOpenRegisterModal(false)}
          showImage={showImage || false}
        />
      )}
    </>
  );
}
