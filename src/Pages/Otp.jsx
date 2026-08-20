import React from "react";
import { useForm } from "react-hook-form";
import ImageLogo from "../Components/ImageLogo";

const Otp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    defaultValues: {
      mobilenumber: "",
      acceptrules: "",
    },
    // resolver: zodresolver()
  });

  const sendform = (data) => {
    console.log(data);
  };

  return (
    <div className="flex-col-center w-full h-screen  gap-20 p-8">
      <ImageLogo />
      <form
        onSubmit={handleSubmit(sendform)}
        className="w-full max-w-75 flex-col-center gap-8"
      >
        <h1 className="text-[24px] font-bold text-gray-8">کد تائید </h1>
        <p className="text-gray-7"> کد تایید به شماره 09124587796 ارسال شد</p>

        <div dir="ltr" className="w-full flex items-start justify-center gap-2">
          <input
            type="text"
            placeholder=""
            className="w-full border-gray-4 border-2 px-5 py-2 rounded-4"
            {...register("mobilenumber")}
          />
          <input
            type="text"
            placeholder=""
            className="w-full border-gray-4 border-2 px-5 py-2 rounded-4"
            {...register("mobilenumber")}
          />
          <input
            type="text"
            placeholder=""
            className="w-full border-gray-4 border-2 px-5 py-2 rounded-4"
            {...register("mobilenumber")}
          />
          <input
            type="text"
            placeholder=""
            className="w-full border-gray-4 border-2 px-5 py-2 rounded-4"
            {...register("mobilenumber")}
          />
          <input
            type="text"
            placeholder=""
            className="w-full border-gray-4 border-2 px-5 py-2 rounded-4"
            {...register("mobilenumber")}
          />
          {/* <span className="text-error">وارد کردن شماره همراه الزامی است!</span> */}
        </div>
        <div className="w-full flex flex-col items-start justify-center text-[12px] gap-2">
          <div className="w-full flex items-center justify-between gap-2">
            <p className="text-gray-7">تا دریافت مجدد کد ۱:۵۹</p>
            <p className="text-gray-7"> ویرایش شماره</p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-gray-4 px-5 py-2 rounded-4"
        >
          برسی کد
        </button>
      </form>
    </div>
  );
};

export default Otp;
