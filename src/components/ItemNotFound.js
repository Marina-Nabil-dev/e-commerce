import React from "react";

function CarNotFound() {
  return (
    <div className="items-center justify-center text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Nothing here?</h2>
      <p className="text-lg mb-4">
        There's no booked cars here, find your dream car and book it in no time.
      </p>
      <img
        src="/home/carNotFound.jpg"
        alt="Car"
        className="w-96 h-auto mx-auto"
      />
    </div>
  );
}

export default CarNotFound;
