import React from "react";
import SixtySevenIcon from "../icons/sixtySevenIcon";
import CarFix from "../icons/CarFix";
import CashBack from "../icons/CashBack";

export default function WhyBuyFromUsSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 self-stretch p-[104px_80px] text-primaryDarkest font-bold">
      <h2 className=" text-[48px]">Why Buy From Us ?</h2>
      <div className="grid grid-cols-3">
        <div className="flex gap-5 items-center justify-center bg-primaryLightest rounded-[16px] w-auto h-32 hover:shadow-md">
            <SixtySevenIcon />
            <span className="pl-2">
              7 Days money back on newly car and 60 Days warranty on each car.
            </span>
        </div>

          <div className="flex gap-5 bg-[#F5F3FF] items-center justify-center rounded-[16px] mx-[8px] px-[8px] w-auto h-32 hover:shadow-md">
              <CashBack />
              <span className="pl-2">
                Trusted Payment, Instalments and paperwork.
              </span>
          </div>
        

        <div className="flex gap-5 bg-[#EDFCF2] items-center justify-center rounded-[16px] mx-[8px] px-[8px] w-auto h-32 hover:shadow-md">
            <CarFix />
            <span className="">
              Full inspection for cars sold by our services or yours.
            </span>
        </div>
       
      </div>
    </div>
  );
}
