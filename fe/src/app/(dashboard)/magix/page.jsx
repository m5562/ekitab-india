"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center text-center h-full">
      <Image
        src={"/images/robot.svg"}
        height={150}
        width={150}
        alt="thomas"
      ></Image>
      <p className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi
        dolore unde laudantium enim tempore illum sequi quasi expedita officiis
        quos. Laudantium, laborum sapiente qui molestias culpa perspiciatis
        tenetur natus voluptatibus doloribus, itaque illo consequuntur
        perferendis incidunt quia maiores assumenda vel eligendi.
      </p>
      <button
        className="mt-4 rounded-lg flex items-center bg-bae-600 text-white px-4 py-2"
        onClick={() => {
          router.push("/magix/chat");
        }}
      >
        Chat with Thomas!
        <span className="icon text-4xl">arrow_right</span>
      </button>
    </div>
  );
};

export default page;
