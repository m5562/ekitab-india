"use client";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { registerSchema } from "../../../../config/yup";
import axiosInstance from "../../../../config/axios";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userObj"))
    console.log(token);
    if (token?.access_token) {
      router.push("/dashboard")
    }
  }, [])
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        cnfPassword: "",
      },
      validationSchema: registerSchema,
      onSubmit: (e) => {
        const { name, email, password } = e;
        axiosInstance
          .post("/register", { name, email, password })
          .then((res) => {
            localStorage.setItem("userObj", JSON.stringify(res.data.user));
            router.push("/dashboard")
          })
          .catch(console.log);
      },
    });
  return (
    <div className="h-dvh w-screen flex items-center justify-center">
      <div className="rounded-2xl border border-solid border-stone-400 p-4">
        <div className="flex items-center flex-col">
          <h1 className="mb-6 font-bold text-xl">Create A New Account</h1>
          <form
            className="flex flex-col grow p-4 items-center lg:grid lg:grid-cols-2 gap-2"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col mb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className={`input ${
                  errors.name && touched.name ? "inp-error" : ""
                }`}
                defaultValue={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <span className="error-msg">{errors.name}</span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email">E-mail or Mobile</label>
              <input
                type="text"
                id="email"
                className={`input ${
                  errors.email && touched.email ? "inp-error" : ""
                }`}
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
                autoComplete="true"
                type="password"
                id="password"
                className={`input ${
                  errors.password && touched.password ? "inp-error" : ""
                }`}
                defaultValue={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.password && touched.password && (
                <span className="error-msg">{errors.password}</span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="cnfPassword">Confirm Password</label>
              <input
                type="password"
                autoComplete="true"
                id="cnfPassword"
                className={`input ${
                  errors.cnfPassword && touched.cnfPassword ? "inp-error" : ""
                }`}
                defaultValue={values.cnfPassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.cnfPassword && touched.cnfPassword && (
                <span className="error-msg">{errors.cnfPassword}</span>
              )}
            </div>
            <button
              className="btn primary col-span-full w-full bg-bae-500"
              onClick={handleSubmit}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
