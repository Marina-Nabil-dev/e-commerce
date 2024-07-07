import React from "react";
import ThreeSixtyIcon from "../icons/ThreeSixtyIcon";
import SpeedMotor from "./../icons/SpeedMotor";
import SettingsIcon from "./../icons/SettingsIcon";
import CalenderIcon from "./../icons/CalenderIcon";
import { getApiData } from "../../helpers/getApiData";
export default function HomeAuctionSection() {
  const fetchAuctions = async() => 
    {
      const response = getApiData()
    };
  return (
    <div className="flex p-[104px_80px_0px_80px] flex-col justify-items-start gap-12 self-stretch">
      <h2 className="text-primaryDarkest text-3xl font-bold font-[Alexandria] leading-relaxed tracking-tight">
        Biddex Auctions
      </h2>
      <div className="flex flex-row ">
        <div className="w-[330px] h-[360px] flex flex-col gap-4 pr-2 items-center bg-white rounded-md shadow-sm mb-2">
          <div className="relative text-gray-500">
            <img src="home/car.png" alt="car default image" />
            <span className="absolute top-2 justify-end flex flex-row">
              <span className="text-sm font-bold rounded-full bg-white mx-2 px-2 py-1">
                Great Deals
              </span>
              <span className="rounded-full right-2 py-2 px-2 bg-black bg-opacity-25 ml-40">
                <ThreeSixtyIcon />
              </span>
            </span>
          </div>
          <div className="flex flex-col items-start p-[32px_12px_16px_12px] self-stretch">
            <p className="text-grayDarkest font-bold pb-2">BMW 730d xDrive 195 kW</p>
            <ul className="flex space-x-2">
              <li className="text-gray-700 flex items-center justify-center">
                <SpeedMotor /> New car
              </li>
              <li className="text-gray-700 flex items-center justify-center pl-3">
                <CalenderIcon /> 2024
              </li>
              <li className="text-gray-700 flex items-center justify-center pl-11 ">
                <SettingsIcon /> Automatic
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold text-primary">Auction</span>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>360 View</span>
              </div>
            </div>
            <img
              src="https://picsum.photos/200/300"
              alt="Car Image"
              className="w-full h-auto mb-4 rounded-md"
            />
          </div>
        </div> */}
        <div className="w-1/4 gap-4 text-primary">02</div>
        <div className="w-1/4  gap-4 text-primary">03</div>
        <div className="w-1/4  gap-4 text-primary">04</div>
      </div>
    </div>
  );
}
