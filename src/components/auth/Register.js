import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import LoginModal from "./Login";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { AuthRoutes } from "../../routes/authRoutes";
import { postApiData } from './../../helpers/postApiData';
import { toast } from 'react-toastify';
export default function RegisterModal({
  isOpen,
  closeRegisterModal,
  showImage,
}) {
  const [user, setUser] = useState({
    name: "",
    mobile_number: "",
    password: "",
    password_confirmation: "",
    dial_code: "+20",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading , setLoading] = useState(false)
  const [errors, setErrors] = useState({});

  const [isLoginModalOpen, setOpenLoginModal] = useState(false);
  const handleLoginModal = (e) => {
    e.preventDefault();
    setOpenLoginModal(true);
    closeRegisterModal();
  };

  let validationSchema = Yup.object({
    name: Yup.string()
      .required("Please enter your name")
      .min(2, "Name is too short"),
    mobile_number: Yup.string()
      .required("Please enter your phone number")
      .matches(/^0?[0-9]{10}$/, "Telephone must be 10 valid digits"),

    password: Yup.string()
      .required("Please enter your password")
      .min(6, "Password is too short"),
    //   .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
    password_confirmation: Yup.string()
      .required("Please enter your confirm password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const registerForm = useFormik({
    initialValues: {
      name: "",
      mobile_number: "",
      password: "",
      password_confirmation: "",
      dial_code : "+20"
    },
    validationSchema,
    onSubmit:  registerApi,
  });


  async function registerApi(value) {
    setLoading(true)
    setErrors([]);

    console.log(value);
    
    setUser(value);
    
    
    const response = await postApiData(AuthRoutes.REGISTER, user);
    const { status, message, data } = response;
    setLoading(false)
    

    if(status === 200){
        toast.success(message);
       
        closeRegisterModal();
        setOpenLoginModal(true);
    }
    else{
        setErrors(data);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={closeRegisterModal}
        className="fixed inset-0 z-50 flex items-center justify-center w-full"
      >
        <DialogBackdrop className="fixed inset-0 bg-grayDarker bg-opacity-70 backdrop-blur-[2px]" />
        <DialogPanel
          className={`relative bg-white rounded-lg shadow-xl ${
            showImage ? "w-full p-0" : "w-[70%] p-2"
          } max-w-4xl flex overflow-hidden`}
        >
          {/* Left side - Form */}
          <div className={`flex flex-col ${showImage ? "w-4/6" : "w-full"} py-3 px-5`}>
            <div className="flex justify-end items-end text-right w-6">
              <img
                className="border-[1px] border-grayDarker p-1 my-2 rounded-full cursor-pointer"
                src="/home/x-close.svg"
                alt="Biddex Logo"
                onClick={closeRegisterModal}
              />
            </div>
            <div className="px-10 ml-10">
              <form onSubmit={registerForm.handleSubmit}>
                <div className="mb-3">
                  <h2 className="text-md text-grayDarker font-semibold mt-4">
                    Phone number or email
                  </h2>
                  <div className="mt-1 flex border-[1px] border-gray-300 rounded-md">
                    <span className="inline-flex items-center p-2 rounded-r-none px-3 bg-gray-50 ">
                      +20
                    </span>
                    <input
                      type="text"
                      name="mobile_number"
                      onChange={registerForm.handleChange}
                      onBlur={registerForm.handleBlur}
                      value={registerForm.values.mobile_number}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border focus:ring-gray-300"
                      placeholder="1287748574"
                    />
                  </div>
                  {registerForm.errors.mobile_number &&
                  registerForm.touched.mobile_number ? (
                    <p className="text-red-500">
                      {registerForm.errors.mobile_number}
                    </p>
                  ) : null}

                  {errors && errors["mobile_number"] ? 
                    (<p className="text-red-500 font-semibold px-2">{errors["mobile_number"]}</p>) : null
                  }

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
                      name="password"
                      onChange={registerForm.handleChange}
                      onBlur={registerForm.handleBlur}
                      value={registerForm.values.password}
                      type={showPassword ? "text" : "password"}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="********"
                    />
                    <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
                      {showPassword ? (
                        <EyeSlashIcon
                          onClick={togglePasswordVisibility}
                          className="size-6 "
                        />
                      ) : (
                        <EyeIcon
                          onClick={togglePasswordVisibility}
                          className="size-6"
                        />
                      )}
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
                      type={showConfirmPassword ? "text" : "password"}
                      name="password_confirmation"
                      onChange={registerForm.handleChange}
                      onBlur={registerForm.handleBlur}
                      value={registerForm.values.password_confirmation}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="********"
                    />
                    <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
                      {showConfirmPassword ? (
                        <EyeSlashIcon
                          onClick={toggleConfirmPasswordVisibility}
                          className="size-6 "
                        />
                      ) : (
                        <EyeIcon
                          onClick={toggleConfirmPasswordVisibility}
                          className="size-6"
                        />
                      )}
                    </span>
                  </div>
                  {registerForm.errors.password_confirmation &&
                  registerForm.touched.password_confirmation ? (
                    <p className="text-red-500">
                      {registerForm.errors.password_confirmation}
                    </p>
                  ) : null}
                </div>

                <span className="text-gray-500 font-semibold text-sm">
                  By creating an account you accept terms and conditions and
                  Privacy Policy
                </span>
                
                {isLoading ? (
                  <button
                    className="w-full mt-6 items-center justify-center text-center flex font-bold
                     bg-primary text-white py-2 px-4 rounded-full hover:bg-primaryDarker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled
                  >
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
            
                  </button>
                ) : (
                  <button
                    className="w-full mt-6 font-bold bg-primary text-white py-2 px-4 rounded-full hover:bg-primaryDarker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="submit" 
                    onClick={registerForm.handleSubmit}
                  >
                   Create Account
                  </button>
                )}
            
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
              <p className="mt-4 p-2 text-center text-gray-500">
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
          {showImage && (
            <div
              className="w-1/2 bg-cover bg-right flex relative"
              style={{ backgroundImage: `url('/home/loginImage.png')` }}
            >
              <div className=" justify-end p-8  text-white">
                <h2 className="text-3xl font-bold">Welcome back to Biddex</h2>
                <p className="mt-4 text-lg">Register your Account</p>
              </div>
            </div>
          )}
        </DialogPanel>
      </Dialog>
      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          closeModal={setOpenLoginModal}
          showImage={showImage || false}
        />
      )}
    </>
  );
}
