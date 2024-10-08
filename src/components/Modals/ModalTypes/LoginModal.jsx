import React, { useState } from "react";
import FormField from "../../Forms/Fields/FormField";
import PasswordInput from "../../Forms/Fields/PasswordInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthRoutes } from "../../../routes/authRoutes";
import { postApiData } from "./../../../helpers/postApiData";
import { toast } from "react-toastify";
import LoadingButton from "../../Forms/Fields/LoadingButton";
import GoogleRegisterButton from "./../../Forms/Fields/GoogleRegisterButton";
import ModalComponent from "./../ModalComponent";

const LoginModal = ({ closeModal, showImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  // const [credentials, setCredentials] = useState({
  //   mobile_number: "",
  //   password: "",
  //   dial_code: "+20",
  // });

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    setMessage("");
    setErrors({});

    const response = await postApiData(AuthRoutes.LOGIN, values);

    const { status, message, data } = response;
    if (status === 200) {
      toast.success("Login successful");
      console.log(data);
      
      // closeModal();
    }
    if (status == 422) {
      setErrors(data);
      setMessage(message);
    }

    setIsLoading(false);
    setSubmitting(false);
  };

  const loginForm = useFormik({
    initialValues: {
      mobile_number: "",
      password: "",
      dial_code: "+20",
    },

    validationSchema: Yup.object({
      mobile_number: Yup.string().required("Phone number is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    }),
    onSubmit: handleSubmit,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleOpenRegitserModal(e) {
    e.preventDefault();
    openModal("register");
  }

  return (
    <>
      <div
        className={`flex flex-col ${
          showImage ? "w-1/2" : "w-full"
        } max-w-4xl py-3 px-5`}
      >
        <div className="flex justify-end items-end text-right w-6">
          <img
            className="border-[1px] border-grayDarker p-1 my-2 rounded-full cursor-pointer"
            src="/home/x-close.svg"
            alt="close modal"
            onClick={closeModal}
          />
        </div>
        <form onSubmit={loginForm.handleSubmit} className="p-8">
          {message && <p className="text-red-500 font-semibold">{message}</p>}

          <FormField
            label="Phone number or email"
            name="mobile_number"
            type="text"
            value={loginForm.values.mobile_number}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            error={loginForm.errors.mobile_number}
            backendError={
              errors && errors["mobile_number"] ? errors["mobile_number"] : null
            }
            touched={loginForm.touched.mobile_number}
            placeholder="1287748574"
            additionalContent={
              <span className="inline-flex items-center p-2 px-3 bg-gray-50 rounded-md rounded-r-none border-r border-gray-300 group-focus-within:border-black">
                +20
              </span>
            }
          />

          <PasswordInput
            label="Password"
            name="password"
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            error={loginForm.errors.password}
            touched={loginForm.touched.password}
            backendError={
              errors && errors["password"] ? errors["password"] : null
            }
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />
          <LoadingButton
            isLoading={isLoading}
            text="Sign In"
            onClick={loginForm.handleSubmit}
          />

          <div className="text-center mt-4">
            <p className="text-grayLight">Or</p>
            <GoogleRegisterButton />
          </div>

          <p className="mt-4 text-center text-gray-500">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-primary font-bold"
              onClick={handleOpenRegitserModal}
            >
              Create a new account
            </a>
          </p>
        </form>
      </div>

      {showImage && (
        <div
          className="w-1/2 bg-cover bg-right flex relative"
          style={{ backgroundImage: `url('/home/loginImage.png')` }}
        >
          <div className=" justify-end p-8  text-white">
            <h2 className="text-3xl font-bold">Welcome back to Biddex</h2>
            <p className="mt-4 text-lg">Login to your Account</p>
          </div>
        </div>
      )}

      {isModalOpen && (
        <ModalComponent
          isOpen={isModalOpen}
          closeModal={closeModal}
          modalType={modalType}
          showImage={true}
          modalProps={
            {
              /* pass any additional props here */
            }
          }
        />
      )}
    </>
  );
};

export default LoginModal;
