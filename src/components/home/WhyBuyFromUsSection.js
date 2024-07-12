import React from "react";
import SixtySevenIcon from "../icons/sixtySevenIcon";

export default function WhyBuyFromUsSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 self-stretch p-[104px_80px] text-primaryDarkest font-bold">
      <h2 className=" text-[48px]">Why Buy From Us ?</h2>
      <div className="grid grid-cols-3 ">
        <div className="p-[16px_20px] gap-5 bg-primaryLightest rounded-[16px]">
          <p className="flex">
            <SixtySevenIcon />
            <span className="pl-2">
              7 Days money back on newly car and 60 Days warranty on each car.
            </span>
          </p>
        </div>
        {/* <div className="p-[16px_20px] gap-5">
          <span className="">
            7 Days money back on newly car and 60 Days warranty on each car.
          </span>
        </div> */}
      </div>
    </div>
  );
}
