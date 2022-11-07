import React, { useState } from "react";

import { BsCheckLg } from "react-icons/bs";
import { RiCloseCircleLine, RiLoginBoxLine } from "react-icons/ri";

import CustomButton from "../components/CustomButton";
import Portal from "../components/Portal";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import {
  setOpenLoginForm,
  getLoginInfo,
  setErrorMsg,
} from "../redux/slices/loginSlice";
import { useEffect } from "react";

// form validation schema
const validationSchema = yup.object({
  email: yup
    .string()
    .max(255)
    .email("Please enter valid Email!")
    .required("Please enter your Email!"),
  password: yup.string().max(20).required("Please enter your Password!"),
});

const SignIn = () => {
  // show password
  const [showPassword, setShowPassword] = useState(false);

  const { openLoginForm, errorMsg, loading } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();

  // config react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    // setFocus,
    reset,
    getValues,
  } = useForm({ resolver: yupResolver(validationSchema), mode: "onChange" });

  // submit form handler
  const loginHandler = () => {
    if (isValid) {
      const { email, password } = getValues();
      dispatch(getLoginInfo({ email, password }));
    }
  };

  // close form handler
  const closeFormHandler = () => {
    // reset error message
    dispatch(setErrorMsg(""));
    // reset checkbox show password
    setShowPassword(false);
    // reset form
    reset({
      email: "",
      password: "",
    });
    // close modal
    dispatch(setOpenLoginForm(false));
  };

  useEffect(() => {
    if (!loading) {
      // reset checkbox show password
      setShowPassword(false);
      // reset form
      reset({
        email: "",
        password: "",
      });
    }
  }, [loading, reset]);

  return (
    <Portal
      visible={openLoginForm}
      onClose={closeFormHandler}
      containerClassName="fixed z-[9999] inset-0 flex items-center justify-center"
    >
      <form
        className="relative z-[51] w-[500px] rounded-xl bg-secondary py-5 px-7 text-lg"
        onSubmit={handleSubmit(loginHandler)}
      >
        <RiCloseCircleLine
          onClick={closeFormHandler}
          className="absolute right-3 top-3 z-50 text-3xl transition-all hover:scale-110 hover:cursor-pointer"
        />
        <h1 className="mb-3 text-center text-3xl font-medium">Đăng nhập</h1>
        <div className="relative mb-2 flex w-full flex-col">
          <label className="mb-1 font-medium" htmlFor="email">
            Email:
          </label>
          <input
            {...register("email")}
            className="rounded-lg border-2 border-primary p-2"
            type="text"
            name="email"
            id="email"
            placeholder="Nhập email"
          />
          {errors?.email && (
            <p className="absolute top-[3px] right-0 text-base font-medium text-contrast">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="relative mb-1 flex w-full flex-col">
          <label className="mb-1 font-medium" htmlFor="password">
            Password:
          </label>
          <input
            {...register("password")}
            className="rounded-lg border-2 border-primary p-2"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Nhập password"
          />
          {errors?.password && (
            <p className="absolute top-[3px] right-0 text-base font-medium text-contrast">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className="flex w-full items-center">
          <input
            type="checkbox"
            id="showPass"
            name="showPass"
            className="hidden"
            onChange={(e) => {
              setShowPassword(e.target.checked);
            }}
            checked={showPassword}
          />
          <label
            htmlFor="showPass"
            className={`${
              showPassword ? "bg-contrast" : "bg-gray-400"
            } flex h-4 w-4 cursor-pointer items-center justify-center rounded transition-all`}
          >
            <BsCheckLg
              className={`text-xs text-secondary ${
                showPassword ? "opacity-100" : "opacity-0"
              } z-50 transition-all`}
            />
          </label>
          <label htmlFor="showPass" className="ml-1 cursor-pointer">
            Show password
          </label>
        </div>
        {errorMsg && (
          <p className="text-base font-medium text-contrast">{errorMsg}</p>
        )}
        <CustomButton
          type="submit"
          className="mt-3 mb-2 flex w-full items-center justify-center rounded-lg bg-primary py-3 px-2 text-center text-secondary"
          aria-disabled={loading ? true : false}
        >
          {loading ? (
            <div className="mx-auto h-5 w-5 animate-spin rounded-full border-2 border-t-2 border-white border-t-transparent"></div>
          ) : (
            <>
              <RiLoginBoxLine className="mr-1 inline-block text-xl" />
              Đăng nhập
            </>
          )}
        </CustomButton>
      </form>
    </Portal>
  );
};

export default SignIn;
