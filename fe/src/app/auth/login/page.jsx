import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-dvh flex items-center justify-center">
      <div className="rounded-2xl border border-solid border-stone-400">
        <div className="flex items-center">
          <div className="grow">
            <Image
              src={"/images/login-bg.jpg"}
              width={500}
              height={500}
              className="rounded-l-2xl hidden lg:block"
            ></Image>
          </div>
          <div className="flex flex-col grow p-4 items-center">
            <Image
              src={"/images/consent.png"}
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
            <h1 className="mb-6 font-bold text-xl">Sign in to your account</h1>
            <div className="flex flex-col mb-4">
              <label htmlFor="username">E-mail</label>
              <input type="text" id="username" className="input" />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="input" />
            </div>
            <button className="btn primary bg-bae-500 w-full">Login</button>
            <div className="hr w-full"></div>
            <div className="flex gap-6">
              <Image src={"/images/google.svg"} width={30} height={30}></Image>
              <Image
                src={"/images/facebook.svg"}
                width={30}
                height={30}
              ></Image>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
