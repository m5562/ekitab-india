"use client";
import { useFormik } from "formik";
import React from "react";
import { loginSchema } from "../../../../config/yup";
import axiosInstance from "../../../../config/axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (e) => {
        const { email, password } = e;
        axiosInstance
          .post("/login", { email, password })
          .then((res) => {
            localStorage.setItem("userObj", JSON.stringify(res.data.user));
            router.push("/dashboard");
          })
          .catch(console.log);
      },
    });
  return (
    <div className="h-dvh flex items-center justify-center">
      <div className="rounded-2xl border border-solid border-stone-400">
        <div className="flex items-center">
          <div className="grow">
            <Image
              src={"/images/login-bg.jpg"}
              width={500}
              height={500}
              alt="logo"
              className="rounded-l-2xl hidden lg:block"
            ></Image>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col grow p-4 items-center"
          >
            <Image
              src={"/images/consent.png"}
              width={100}
              height={100}
              alt="logo"
              className="rounded-full mb-4"
            />
            <h1 className="mb-6 font-bold text-xl">Sign in to your account</h1>
            <div className="flex flex-col mb-4">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                id="email"
                className="input"
                defaultValue={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <span className="error-msg">{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="input"
                autoComplete="true"
                defaultValue={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <span className="error-msg">{errors.password}</span>
              )}
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn primary bg-bae-500 w-full"
            >
              Login
            </button>
            <div className="hr w-full"></div>
            <div className="flex gap-6">
              <Image
                src={"/images/google.svg"}
                width={30}
                height={30}
                alt="google icon"
              ></Image>
              <Image
                src={"/images/facebook.svg"}
                width={30}
                alt="facebook icon"
                height={30}
              ></Image>
            </div>
            <hr />
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
