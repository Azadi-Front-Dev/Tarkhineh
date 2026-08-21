import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageLogo from "../Components/ImageLogo";
import { otpSchema } from "../Validators/OtpSchema";

const Otp = () => {
  const {
    handleSubmit,
    setValue,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      otp: "",
    },
    resolver: zodResolver(otpSchema),
    mode: "onChange",
  });
  const inputRefs = useRef([]);
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    const digit = value.slice(-1);
    inputRefs.current[index].value = digit;
    const otp = inputRefs.current.map((input) => input?.value || "").join("");
    setValue("otp", otp, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
    if (digit && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !inputRefs.current[index]?.value &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedValue = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 5);
    pastedValue.split("").forEach((digit, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = digit;
      }
    });
    setValue("otp", pastedValue, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
    inputRefs.current[Math.min(pastedValue.length, 4)]?.focus();
  };
  const sendform = (data) => {
    console.log(data);
  };
  return (
    <div className="flex-col-center w-full h-screen gap-20 p-8">
      <ImageLogo />
      <form
        onSubmit={handleSubmit(sendform)}
        className="w-full max-w-75 flex-col-center gap-8"
      >
        <h1 className="text-[24px] font-bold text-gray-8">کد تائید</h1>
        <p className="text-gray-7">کد تایید به شماره 09124587796 ارسال شد</p>
        <div
          dir="ltr"
          className="w-full flex items-start justify-center gap-2"
          onPaste={handlePaste}
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className={`w-full border-2 px-5 py-2 rounded-4 ${
                errors.otp ? "border-error" : "border-gray-4"
              }`}
              ref={(element) => {
                inputRefs.current[index] = element;
              }}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        {errors.otp && <span className="text-error">{errors.otp.message}</span>}
        <div className="w-full flex flex-col items-start justify-center text-[12px] gap-2">
          <div className="w-full flex items-center justify-between gap-2">
            <p className="text-gray-7">تا دریافت مجدد کد ۱:۵۹</p>
            <p className="text-gray-7">ویرایش شماره</p>
          </div>
        </div>
        <button
          type="submit"
          className={`w-full text-white px-5 py-2 rounded-4 ${
            isValid ? "bg-primary" : "bg-gray-4"
          }`}
        >
          برسی کد
        </button>
      </form>
    </div>
  );
};

export default Otp;
