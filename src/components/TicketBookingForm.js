import React, { useEffect, useState } from "react";

import { FaLessThanEqual } from "react-icons/fa";

import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { getSignUpInfo } from "../redux/slices/signUpSlice";
import { getTicketAdded } from "../redux/slices/ticketSlice";

import CustomButton from "./CustomButton";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// form validation schema
const validationSchema = yup.object({
  fullName: yup.string().required("Vui lòng nhập tên!"),
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại!")
    .max(10, "Số điện thoại không hợp lệ!")
    .matches(new RegExp("[0-9]{10}"), "Số điện thoại không hợp lệ!"),
  email: yup
    .string()
    .required("Vui lòng nhập email!")
    .max(255, "Email không dài quá 255 ký tự")
    .email("Vui lòng nhập email hợp lệ!"),
  password: yup
    .string()
    .required("Vui lòng nhập password!")
    .min(8, "Password phải có ít nhất 8 ký tự!")
    .max(20, "Password không dài quá 20 ký tự!"),
});

const TicketBookingForm = ({
  amount,
  amountChangeHandler,
  ticketTypeChecked,
  showId,
}) => {
  const [ticketTypeError, setTicketTypeError] = useState("");

  const dispatch = useDispatch();

  // get login info from store
  const { loginInfo } = useSelector((state) => state.login);

  // get error message from store
  const { errorMsg } = useSelector((state) => state.signUp);

  // get add ticket loading from store
  const { loading } = useSelector((state) => state.ticket);

  // config react-hook-form
  const useFormConfig = loginInfo._id
    ? { mode: "onChange" }
    : { resolver: yupResolver(validationSchema), mode: "onChange" };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm(useFormConfig);

  // submit form handler
  const addTicketHandler = () => {
    let accountInfo = {};

    if (isValid) {
      accountInfo = getValues();

      if (!ticketTypeChecked.id || amount <= 0) {
        setTicketTypeError("Vui lòng chọn loại vé, số lượng!");
      } else {
        // signup and add ticket
        if (!loginInfo._id) {
          accountInfo.signUpAndAddTicket = true;
          accountInfo.amount = amount;
          accountInfo.ticketType = ticketTypeChecked.id;
          accountInfo.show = showId;
          dispatch(getSignUpInfo(accountInfo));
        } else {
          // add ticket
          dispatch(
            getTicketAdded({
              amount: amount,
              ticketType: ticketTypeChecked.id,
              user: loginInfo._id,
              show: showId,
            })
          );
        }
      }
    }
  };

  // remove msg when user choose ticket type
  useEffect(() => {
    if (ticketTypeChecked.id) {
      setTicketTypeError("");
    }
  }, [ticketTypeChecked.id]);

  return (
    <div className="flex flex-col">
      <h2 className="mt-6 mb-2 text-center text-3xl font-bold">Thông tin vé</h2>

      <form
        onSubmit={handleSubmit(addTicketHandler)}
        className="mt-3 flex flex-col items-center justify-center gap-x-3 text-lg"
      >
        <div className="grid w-full grid-cols-1 justify-between gap-y-4 gap-x-3 md:grid-cols-2">
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
              disabled={loginInfo?._id}
              defaultValue={loginInfo?.fullName}
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
              disabled={loginInfo?._id}
              defaultValue={loginInfo?.email}
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
              disabled={loginInfo?._id}
              defaultValue={loginInfo?.phone}
            />
            {errors?.phone && (
              <p className="absolute -bottom-7 right-0 text-base font-medium text-contrast">
                {errors.phone?.message}
              </p>
            )}
          </div>
          {!loginInfo?._id && (
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
          )}
          <div className="flex w-full flex-col">
            <label className="mb-1 font-medium" htmlFor="amount">
              Số lượng vé (
              <FaLessThanEqual className="inline-block text-xs" />
              3):
            </label>
            <input
              className="rounded-lg border-2 border-primary p-2"
              type="number"
              name="amount"
              id="amount"
              placeholder="0"
              min={1}
              max={3}
              onChange={amountChangeHandler}
              value={amount}
            />
          </div>
          <div className="relative flex w-full flex-col">
            {ticketTypeError && (
              <p className="absolute top-[3px] right-0 text-base font-medium text-contrast">
                {ticketTypeError}
              </p>
            )}
            <p className="mb-1 font-medium">Tổng tiền:</p>
            <p className="rounded-lg border-2 border-contrast p-2 text-right font-bold">
              {new Intl.NumberFormat("vi-VN").format(
                ticketTypeChecked.price * amount
              )}
              đ
            </p>
          </div>
        </div>

        <CustomButton
          type="submit"
          className={"mt-5 w-full rounded-lg bg-primary p-3 text-secondary"}
          disabled={loading}
        >
          {loading ? (
            <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-t-2 border-white border-t-transparent"></div>
          ) : (
            "Đặt vé"
          )}
        </CustomButton>
      </form>
    </div>
  );
};

TicketBookingForm.propTypes = {
  amount: PropTypes.number,
  amountChangeHandler: PropTypes.func,
  ticketTypeChecked: PropTypes.object,
  showId: PropTypes.string,
};

export default TicketBookingForm;
