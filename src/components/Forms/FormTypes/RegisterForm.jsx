import React from "react";
import { useFormik } from "formik";
import PasswordInput from "./../Fields/PasswordInput";
import FormField from './../Fields/FormField';
import LoadingButton from './../Fields/LoadingButton';
import GoogleRegisterButton from './../Fields/GoogleRegisterButton';

function RegisterForm({
  initialValues,
  validationSchema,
  onSubmit,
  isLoading,
  errors,
  showPassword,
  showConfirmPassword,
  togglePasswordVisibility,
  toggleConfirmPasswordVisibility,
}) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField
        label="Phone number or email"
        name="mobile_number"
        type="text"
        value={formik.values.mobile_number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.mobile_number}
        touched={formik.touched.mobile_number}
        placeholder="1287748574"
      />
      {errors && errors["mobile_number"] && (
        <p className="text-red-500 font-semibold px-2">
          {errors["mobile_number"]}
        </p>
      )}

      <FormField
        label="Full Name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.name}
        touched={formik.touched.name}
        placeholder="John Doe"
      />

      <PasswordInput
        label="Password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password}
        touched={formik.touched.password}
        showPassword={showPassword}
        toggleVisibility={togglePasswordVisibility}
      />
      <PasswordInput
        label="Confirm Password"
        name="password_confirmation"
        value={formik.values.password_confirmation}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password_confirmation}
        touched={formik.touched.password_confirmation}
        showPassword={showConfirmPassword}
        toggleVisibility={toggleConfirmPasswordVisibility}
      />

      <span className="text-gray-500 font-semibold text-sm">
        By creating an account you accept terms and conditions and Privacy
        Policy
      </span>
      <LoadingButton
        isLoading={isLoading}
        text="Create Account"
        onClick={formik.handleSubmit}
      />

      <div className="text-center mt-4">
        <p className="text-grayLight">Or</p>
        <GoogleRegisterButton />
      </div>

      <p className="mt-4 p-2 text-center text-gray-500">
        Already have an account?{" "}
        <a
          href="#"
          onClick={formik.handleLoginModal}
          className="text-primary font-bold"
        >
          Sign in
        </a>
      </p>
    </form>
  );
}

export default RegisterForm;
