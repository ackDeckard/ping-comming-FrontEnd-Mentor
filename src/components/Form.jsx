import React from "react";
import { useForm } from "react-hook-form";
import Error from "./Error";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("do something with it");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="xl:grid xl:grid-cols-3 xl:gap-2 xl:mb-5 xl:h-14"
    >
      <input
        {...register("email", {
          required: true,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          },
        })}
        placeholder="Your email address"
        className={`w-full border ${
          errors.email ? "border-lightred" : "border-paleblue"
        } rounded-full py-3 px-6 text-sm
   placeholder-paleblue placeholder-opacity-50 xl:col-span-2 xl:h-11`}
      />
      {errors.email ? <Error /> : ""}
      <button className="bg-paleblue w-full rounded-full my-5 py-3 px-6 text-white text-sm xl:col-start-3 xl:row-start-1 xl:my-0 xl:shadow-xl xl:h-11 xl:hover:bg-hoverpaleblue">
        Notify Me
      </button>
    </form>
  );
}

export default Form;
