import React, { useState } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import RegisterForm from './../../Forms/FormTypes/RegisterForm';
import { AuthRoutes } from './../../../routes/authRoutes';
import { postApiData } from './../../../helpers/postApiData';
const RegisterModal = ({ closeModal }) => {
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
//   const [showLoginModal, setShowLoginModal] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    setUser(values);
    setErrors({});
//     try {
//       const response = await postApiData(AuthRoutes.REGISTER, user);
//       const { status, message, data } = response;
//       if (status === 200) {
//         toast.success("Registration successful");
//       }
//     } catch (error) {
//       console.log(error);
//       setErrors(data);
//       setIsLoading(false);
//     }
//     setSubmitting(false);
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
    <div>
      <h2 className="text-lg font-bold">Register</h2>
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
      <button
        onClick={closeModal}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-full"
      >
        Close
      </button>
    </div>
  );
};

export default RegisterModal;
