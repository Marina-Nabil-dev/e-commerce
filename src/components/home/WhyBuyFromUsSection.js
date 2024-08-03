import React from "react";
import SixtySevenIcon from "../icons/sixtySevenIcon";
import CarFix from "../icons/CarFix";
import CashBack from "../icons/CashBack";

export default function WhyBuyFromUsSection() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Why Buy From Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/path/to/7-days-icon.svg"
              alt="7 Days & 60 Days Warranty"
              className="h-16 w-16"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">7 Days & 60 Days warranty</h3>
          <p className="text-gray-600">
            Enjoy 7 days cash back and 60 days warranty from our website
          </p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/path/to/payment-icon.svg"
              alt="Trusted Payment, Instalments & paperwork"
              className="h-16 w-16"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">
            Trusted Payment, Instalments & paperwork
          </h3>
          <p className="text-gray-600">
            Enjoy easy buying and selling with flexible payments, simple
            paperwork, and transparent transactions-all online
          </p>
        </div>
        <div className="bg-white shadow-md rounded-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/path/to/inspection-icon.svg"
              alt="Full inspection for cars"
              className="h-16 w-16"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Full inspection for cars</h3>
          <p className="text-gray-600">
            We thoroughly check each car for quality
          </p>
        </div>
      </div>
    </div>
  );
}
