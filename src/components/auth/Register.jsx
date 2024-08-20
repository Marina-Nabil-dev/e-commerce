import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import LoginModal from "./Login";
import * as Yup from "yup";
import { postApiData } from "./../../helpers/postApiData";
import { toast } from "react-toastify";
import DialogHeader from "./../Modals/Fields/DialogHeader";
import RegisterForm from "../Forms/FormTypes/RegisterForm";
import { AuthRoutes } from "./../../routes/authRoutes";

export default function RegisterModal({ closeModal }) {
  const [user, setUser] = useState({
    name: "",
    mobile_number: "",
    password: "",
    password_confirmation: "",
    dial_code: "+20",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showLoginModal, setShowLoginModal] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    setUser(values);
    setErrors({});
    // try {
    //   const response = await postApiData(AuthRoutes.REGISTER, user);
    //   const { status, message, data } = response;
    //   if (status === 200) {
    //     toast.success("Registration successful");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setErrors(data);
    //   setIsLoading(false);
    // }
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    mobile_number: Yup.string().required("Phone number or email is required"),
    name: Yup.string().required("Full Name is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    password_confirmation: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  return (
    <>
    
        {/* <Dialog
          open={isOpen}
          onClose={closeRegisterModal}
          className="fixed z-50 inset-0 overflow-y-auto"
        >
          <DialogBackdrop className="fixed inset-0 bg-black opacity-30" />
          <DialogPanel className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <DialogHeader onClose={closeRegisterModal} />
            <RegisterForm
              initialValues={user}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              errors={errors}
              showPassword={showPassword}
              showConfirmPassword={showConfirmPassword}
              togglePasswordVisibility={togglePasswordVisibility}
              toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility}
            />
          </DialogPanel>
        </Dialog>
      */}
      {/* {showLoginModal && (
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      )} */}
    </>
  );
}
