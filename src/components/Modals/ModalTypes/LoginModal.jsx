import React from "react";

const LoginModal = ({ closeModal }) => {
  return (
    <div>
      <h2 className="text-lg font-bold">Login</h2>
      {/* Your login form code */}
      <button
        onClick={closeModal}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-full"
      >
        Close
      </button>
    </div>
  );
};

export default LoginModal;
