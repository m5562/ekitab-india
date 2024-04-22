import Link from "next/link";
import React from "react";

const Bottombar = () => {
  return (
    <div className="h-20 border-solid border-t border-stone-300  bottom-0 flex justify-around w-full md:flex-col md:justify-start md:h-full md:border-r md:border-t-0 md:left-0 md:w-auto bg-stone-50 *:md:justify-start">
      <Link
        href={"/dashboard"}
        className="flex flex-col md:flex-row md:px-4 md:py-4  text-center grow md:grow-0 justify-center text-gray-500 md:items-center md:border-b md:border-solid md:border-stone-300"
      >
        <span className="icon text-2xl md:mr-2">home</span>
        <span className="text-sm">Home</span>
      </Link>
      <Link
        href={"/lessions"}
        className="flex flex-col md:flex-row md:px-4 md:py-4  text-center grow md:grow-0 justify-center text-gray-500 md:items-center md:border-b md:border-solid md:border-stone-300"
      >
        <span className="icon text-2xl md:mr-2">auto_stories</span>
        <span className="text-sm">Lessions</span>
      </Link>
      <Link
        href={"/magix"}
        className="flex flex-col md:flex-row md:px-4 md:py-4  text-center grow md:grow-0 justify-center text-gray-500 md:items-center md:border-b md:border-solid md:border-stone-300"
      >
        <span className="icon text-2xl md:mr-2">auto_awesome</span>
        <span className="text-sm">Thomas</span>
      </Link>
      <Link
        href={"/test"}
        className="flex flex-col md:flex-row md:px-4 md:py-4 text-center grow md:grow-0 justify-center text-gray-500 md:items-center md:border-b md:border-solid md:border-stone-300"
      >
        <span className="icon text-2xl md:mr-2">quiz</span>
        <span className="text-sm">Test</span>
      </Link>
      <Link
        href={"/profile"}
        className="flex flex-col md:flex-row md:px-4 md:py-4  text-center grow md:grow-0 justify-center text-gray-500 md:items-center md:border-b md:border-solid md:border-stone-300"
      >
        <span className="icon text-2xl md:mr-2">manage_accounts</span>
        <span className="text-sm">Profile</span>
      </Link>
    </div>
  );
};

export default Bottombar;
