import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
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
      <div className="w-full max-w-40">
        <img src="./Icons/Logo.png" alt="logo" className="w-full h-full" />
      </div>
      <form
        onSubmit={handleSubmit(sendform)}
        className="w-full max-w-75 flex-col-center gap-8"
      >
        <h1 className="text-[24px] font-bold text-gray-8">ورود / ثبت‌ نام</h1>
        <p className="text-gray-7">شماره همراه خود را وارد کنید</p>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <input
            type="text"
            placeholder="شماره همراه"
            className="w-full border-gray-4 border-2 px-5 py-2 rounded-4"
            {...register("mobilenumber")}
          />
          {/* <span className="text-error">وارد کردن شماره همراه الزامی است!</span> */}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <div className="flex-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4"
              {...register("acceptrules")}
            />
            <div className="flex-center flex-wrap text-[12px] gap-1">
              <p className="">قوانین و مقررات</p>
              <a href="" className="text-primary">
                ارائه خدمات توسط ترخینه
              </a>
              <p>را می‌ پذیرم</p>
            </div>
          </div>
          {/* <span className="text-error"> پذیرفتن قوانین الزامی است !</span> */}
        </div>
        <button
          type="submit"
          className="w-full text-white bg-gray-4 px-5 py-2 rounded-4"
        >
          ارسال کد
        </button>
      </form>
    </div>
  );
};

export default Login;
