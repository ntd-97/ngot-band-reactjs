import React, { useEffect } from "react";

import { RiCloseCircleLine } from "react-icons/ri";
import { BiUserPlus } from "react-icons/bi";

import CustomButton from "../components/CustomButton";
import Portal from "../components/Portal";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import {
  getSignUpInfo,
  setErrorMsg,
  setOpenSignUpForm,
} from "../redux/slices/signUpSlice";

// import { useEffect } from "react";

// form validation schema
const validationSchema = yup.object({
  fullName: yup.string().required("Vui lòng nhập tên!"),
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại!")
    .matches(new RegExp("[0-9]{10}"), "Số điện thoại không hợp lệ!"),
  email: yup
    .string()
    .max(255, "Email không dài quá 255 ký tự")
    .email("Vui lòng nhập email hợp lệ!")
    .required("Vui lòng nhập email!"),
  password: yup
    .string()
    .max(20, "Password không dài quá 20 ký tự!")
    .required("Vui lòng nhập password!"),
});

const SignUp = () => {
  const dispatch = useDispatch();

  // get error message, openSignUpForm from sign up store
  const { errorMsg, openSignUpForm } = useSelector((state) => state.signUp);

  // get loading from login store
  const { loading } = useSelector((state) => state.login);

  // config react-hook-form
  const useFormConfig = {
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    getValues,
  } = useForm(useFormConfig);

  // close form handler
  const closeFormHandler = () => {
    if (!loading) {
      // reset error message
      dispatch(setErrorMsg(""));

      // reset form
      reset({
        fullName: "",
        email: "",
        password: "",
        phone: "",
      });

      // close modal
      dispatch(setOpenSignUpForm(false));
    }
  };

  // submit form handler
  const signUpHandler = () => {
    let accountInfo = {};

    if (isValid) {
      accountInfo = getValues();
      accountInfo.signUpAndAddTicket = false;
      dispatch(getSignUpInfo(accountInfo));
    }
  };

  useEffect(() => {
    // reset form
    reset({
      fullName: "",
      email: "",
      password: "",
      phone: "",
    });
  }, [openSignUpForm, reset]);

  return (
    <Portal
      visible={openSignUpForm}
      onClose={closeFormHandler}
      containerClassName="fixed z-[9999] inset-0 flex items-center justify-center"
    >
      <form
        onSubmit={handleSubmit(signUpHandler)}
        className="relative z-[51] w-[600px] rounded-xl bg-secondary py-5 px-7 text-lg"
      >
        <RiCloseCircleLine
          onClick={closeFormHandler}
          className="absolute right-3 top-3 z-50 text-3xl transition-all hover:scale-110 hover:cursor-pointer"
        />

        <h1 className="mb-5 text-center text-3xl font-medium">Đăng ký</h1>

        <div className="grid w-full grid-cols-2 justify-between gap-y-6 gap-x-3">
          <div className="relative flex w-full flex-col">
            <label className="mb-1 font-medium" htmlFor="fullName">
              Họ và tên:
            </label>
            <input
              {...register("fullName")}
              className="rounded-lg border-2 border-primary p-2"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Nguyễn Văn A"
            />
            {errors?.fullName && (
              <p className="absolute -bottom-7 right-0 text-base font-medium text-contrast">
                {errors.fullName?.message}
              </p>
            )}
          </div>
          <div className="relative flex w-full flex-col">
            <label className="mb-1 font-medium" htmlFor="email">
              Email:
            </label>
            <input
              {...register("email")}
              className="rounded-lg border-2 border-primary p-2"
              type="text"
              name="email"
              id="email"
              placeholder="abc@email.com"
            />
            {errors?.email && (
              <p className="absolute -bottom-7 right-0 text-base font-medium text-contrast">
                {errors.email?.message}
              </p>
            )}
            {!errors?.email && errorMsg && (
              <p className="absolute -bottom-7 right-0 text-base font-medium text-contrast">
                {errorMsg}
              </p>
            )}
          </div>
          <div className="relative flex w-full flex-col">
            <label className="mb-1 font-medium" htmlFor="phone">
              Số điện thoại:
            </label>
            <input
              {...register("phone")}
              className="rounded-lg border-2 border-primary p-2"
              type="text"
              name="phone"
              id="phone"
              placeholder="0909123456"
            />
            {errors?.phone && (
              <p className="absolute -bottom-7 right-0 text-base font-medium text-contrast">
                {errors.phone?.message}
              </p>
            )}
          </div>
          <div className="relative flex w-full flex-col">
            <label className="mb-1 font-medium" htmlFor="password">
              Password:
            </label>
            <input
              {...register("password")}
              className="rounded-lg border-2 border-primary p-2"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            {errors?.password && (
              <p className="absolute -bottom-7 right-0 text-base font-medium text-contrast">
                {errors.password?.message}
              </p>
            )}
          </div>
        </div>
        <CustomButton
          type="submit"
          className={
            "mt-[30px] mb-2 flex w-full items-center justify-center rounded-lg bg-primary py-3 px-2 text-center text-secondary"
          }
          disabled={loading}
        >
          {loading ? (
            <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-t-2 border-white border-t-transparent"></div>
          ) : (
            <>
              <BiUserPlus className="mr-1 inline-block text-[26px]" />
              Đăng ký
            </>
          )}
        </CustomButton>
      </form>
    </Portal>
  );
};

export default SignUp;
