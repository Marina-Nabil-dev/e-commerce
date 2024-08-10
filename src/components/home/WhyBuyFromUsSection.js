import React from "react";
import SixtySevenIcon from "../icons/sixtySevenIcon";
import CarFix from "../icons/CarFix";
import CashBack from "../icons/CashBack";
import TrustedIcon from "../icons/TrustedIcon";
import SettingsIcon from "../icons/SettingsIcon";

export default function WhyBuyFromUsSection() {
  return (
    <div className="container mx-auto p-[100px_80px]">
      <h2 className="text-5xl text-primaryDarkest font-bold text-center mb-8">Why Buy From Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className=" rounded-lg border border-gray-400 p-6 text-center">
          <div className="flex justify-center">
            <SixtySevenIcon />
          </div>
          <h3 className="text-xl font-bold mb-2 text-textDark">7 Days & 60 Days warranty</h3>
          <p className="text-gray-700 font-semibold">
            Enjoy 7 days cash back and 60 days warranty from our website
          </p>
        </div>
        <div className=" rounded-lg border border-gray-400 p-6 text-center">
          <div className="flex justify-center mb-4">
           <TrustedIcon />
          </div>
          <h3 className="text-xl font-bold mb-2 text-textDark">
            Trusted Payment, Instalments & paperwork
          </h3>
          <p className="text-gray-700 font-semibold">
            Enjoy easy buying and selling with flexible payments, simple
            paperwork, and transparent transactions-all online
          </p>
        </div>
        <div className=" rounded-lg border border-gray-400 p-6 text-center">
          <div className="flex justify-center mb-4">
            <SettingsIcon />
          </div>
          <h3 className="text-xl font-bold mb-2 text-textDark">Full inspection for cars</h3>
          <p className="text-gray-700 font-semibold">
            We thoroughly check each car for quality
          </p>
        </div>
      </div>
    </div>
  );
}
