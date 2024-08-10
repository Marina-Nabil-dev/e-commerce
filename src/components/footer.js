import React from "react";
import PhoneIcon from "./icons/Phone";
import InboxIcon from "./icons/Inbox";

function Footer() {
  return (
    <>
      <footer className="container p-20 border-t-[1px] border-line mx-auto">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 py-3 mb-8 items-start border-b-[1px] border-line">
            <img
              className="font-bold w-36 py-2 items-center justify-center "
              src="home/logo.png"
            />
            <div className="flex flex-row space-x-4 self-stretch">
              <button className="flex bg-primary hover:bg-primaryDarkest font-semibold text-white px-4 py-2 w-1/3 items-center justify-center rounded-[6px]">
                Buy now
              </button>
              <button className="bg-white hover:bg-primaryLightest text-primaryDarkest font-semibold border-[1px] border-primaryLight   px-4 py-2 w-1/3 items-center justify-center rounded-[6px]">
                Sell Your Car
              </button>
              <button className="bg-primaryLightest hover:bg-primary hover:text-white text-primaryDarker font-semibold border-[1px] border-primaryLight  px-4 py-2 w-1/3 items-center justify-center rounded-[6px]">
                Import now
              </button>
            </div>
          </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row justify-start items-start w-2/3">
            <div className="w-1/3">
              <h2 className="text-xl font-bold mb-4 text-primaryDarker">
                Features
              </h2>
              <ul className="text-grayDarker font-semibold">
                <li className="my-2">
                Order your dream car{" "}
                  <span className="text-black rounded-full mx-2 bg-primaryLightest p-2">New</span>
                </li>
                <li className="">Biddex inspection</li>
                <li className="my-2">Compare cars</li>
                <li className="my-2">Finance options</li>
                <li className="my-2">Insurance plans </li>

              </ul>
            </div>
            <div className="w-1/3">
              <h2 className="text-xl font-bold mb-4 text-primaryDarker">
                Legal
              </h2>
              <ul className="text-grayDarker font-semibold">
                <li className="mb-2">Terms and conditions</li>
                <li className="mb-2">Privacy</li>
                <li className="mb-2">Contact us </li>
                <li className="mb-2">FAQs</li>
              </ul>
            </div>
            <div className="w-1/3">
              <h2 className="text-xl font-bold mb-4 text-primaryDarker">
                Company
              </h2>
              <ul className="text-grayDarker font-semibold">
                <li className="mb-2">About us</li>
                    <li className="mb-2">How it works</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row justify-end items-start w-1/3 mx-auto">
            <div>
              <h2 className="text-xl font-bold mb-4 text-primaryDarker">
                Contact us
              </h2>
              <ul className="text-grayDarker font-semibold">
                <li className="mb-2">
                  <span className="flex items-center">
                   <PhoneIcon />
                    <span className="ml-2">19225</span>
                  </span>
                </li>
                <li className="mb-2">
                  <span className="flex items-center">
                   <InboxIcon />
                    <span className="ml-2">Support@Biddex.com</span>
                  </span>
                </li>
              
              </ul>
            </div>
          </div>
          </div>

    
        <div className="items-end text-right text-grayDarker font-semibold">
          <span className="text-center mb-4">
          © 2025 Biddex. All rights reserved. 
          </span>
          <span className= "text-center">
          The Trademark BIDDEX is owner by Euro Tech
          </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
