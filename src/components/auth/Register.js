import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React, { useState } from "react";
import PasswordEye from "../icons/PasswordEye";
import LoginModal from "./Login";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Message from './../Message';
export default function RegisterModal({ isOpen, closeModal }) {
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoginModalOpen, setOpenLoginModal] = useState(false);
  const handleLoginModal = (e) => {
    e.preventDefault();
    closeModal();
    setOpenLoginModal(true);
  };
  let validationSchema = Yup.object({
      "name": Yup.string().required("Please enter your name").min(2, "Name is too short"),
      "phoneNumber": Yup.string().required("Please enter your phone number")
      .matches(
        /^0?[0-9]{10}$/, "Telephone must be 10 digits"
      ),
      
      "password": Yup.string().required("Please enter your password").min(6, "Password is too short"),
    //   .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
      "confirmPassword": Yup.string().required("Please enter your confirm password").oneOf([Yup.ref("password"), null], "Passwords must match"),
  })

  const registerForm = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: handleRegisterFormSubmit,
  });

  function handleRegisterFormSubmit(event) {
    // event.preventDefault();
    // setUser(values);
    console.log(event);
  }
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center w-full"
      >
        <DialogBackdrop className="fixed inset-0 bg-grayDarker bg-opacity-70 backdrop-blur-[2px]" />
        <DialogPanel className="relative bg-white rounded-lg shadow-xl p-0 w-full max-w-4xl flex overflow-hidden">
          {/* Left side - Form */}
          <div className="flex flex-col w-1/2 py-3 px-5">
            <div className="flex justify-start w-6">
              <img
                className="border-[1px] border-grayDarker p-1 rounded-full cursor-pointer"
                src="/home/x-close.svg"
                alt="Biddex Logo"
                onClick={closeModal}
              />
            </div>
            <div className="px-10 ml-10">
              <form onSubmit={registerForm.handleSubmit}>
            
                <div className="mb-3">
                  <h2 className="text-md text-grayDarker font-semibold mt-4">
                    Phone number or email
                  </h2>
                  <div className="mt-1 flex">
                    <span className="inline-flex items-center px-3 bg-gray-200 text-gray-700 rounded-l-md">
                      +20
                    </span>
                    <input
                      type="text"
                      name="phoneNumber"
                      onChange={registerForm.handleChange}
                      onBlur={registerForm.handleBlur}
                      value={registerForm.values.phoneNumber}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="1287748574"
                    />
                  </div>
                  {registerForm.errors.phoneNumber &&
                  registerForm.touched.phoneNumber ? (
                    <p className="text-red-500">
                      {registerForm.errors.phoneNumber}
                    </p>
                  ) : null}
                </div>
                <div className="mb-3">
                  <h2 className="text-md text-grayDarker font-semibold ">
                    Full Name
                  </h2>
                  <div className="mt-1 flex">
                    <input
                      type="text"
                      name="name"
                      onChange={registerForm.handleChange}
                      onBlur={registerForm.handleBlur}
                      value={registerForm.values.name}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  {registerForm.errors.name && registerForm.touched.name ? (
                    <p className="text-red-500">{registerForm.errors.name}</p>
                  ) : null}
                </div>
                <div className="mb-3">
                  <h2 className="text-md text-grayDarker font-semibold">
                    Password
                  </h2>
                  <div className="mt-1 relative">
                    <input
                      type="password"
                      name="password"
                      onChange={registerForm.handleChange}
                      onBlur={registerForm.handleBlur}
                      value={registerForm.values.password}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="********"
                    />
                    <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
                      <PasswordEye />
                    </span>
                  </div>
                  {registerForm.errors.password &&
                  registerForm.touched.password ? (
                    <p className="text-red-500">
                      {registerForm.errors.password}
                    </p>
                  ) : null}
                </div>

                <div className="mb-3">
                  <h2 className="text-md text-grayDarker font-semibold">
                    Confirm Password
                  </h2>
                  <div className="mt-1 relative">
                    <input
                      type="password"
                      name="confirmPassword"
                      onChange={registerForm.handleChange}
                      onBlur={registerForm.handleBlur}
                      value={registerForm.values.confirmPassword}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="********"
                    />
                    <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
                      <PasswordEye />
                    </span>
                  </div>
                  {registerForm.errors.confirmPassword &&
                  registerForm.touched.confirmPassword ? (
                    <p className="text-red-500">
                      {registerForm.errors.confirmPassword}
                    </p>
                  ) : null}
                </div>

                <span className="text-gray-500 font-semibold text-sm">
                  By creating an account you accept terms and conditions and
                  Privacy Policy
                </span>

                <button className="w-full mt-6 font-bold bg-primary text-white py-2 px-4 rounded-full hover:bg-primaryDarker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={registerForm.handleSubmit}>
                  Create Account
                </button>
              </form>
              <div className="text-center mt-4">
                <p className="text-grayLight">Or</p>
                <button className="w-full mt-4 flex justify-center items-center bg-white text-gray-700 py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-100">
                  <img
                    src="/home/google.svg"
                    alt="Google Logo"
                    className="h-6 pr-2"
                  />
                  Register with Google
                </button>
              </div>
              <p className="mt-4 text-center text-gray-500">
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={handleLoginModal}
                  className="text-primary font-bold"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>

          {/* Right side - Image */}
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
        </DialogPanel>
      </Dialog>
      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          closeModal={() => setOpenLoginModal(false)}
        />
      )}
    </>
  );
}
