"use client";
import Image from "next/image";
import Link from "next/link";
// import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <div className="h-dvh">
      <div className="w-full px-10 py-3 top-0 border border-solid border-stone-400">
        <div className="logo flex justify-between m-auto items-center">
          {/* <Image src={"/images/cime.jpg"} alt="logo" height={30} width={40} /> */}
          <span className="styled-logo font-black text-3xl">E kitab</span>
          <div className="flex gap-2">
            <Link
              className="rounded-md text-white bg-bae-600 px-4 py-2"
              href={"/auth/login"}
            >
              Login
            </Link>
            <Link
              className="rounded-md text-white bg-bae-600 px-4 py-2"
              href={"/auth/register"}
            >
              register
            </Link>
          </div>
        </div>
      </div>
      <div className="pattern flex relative w-full h-dvh px-28">
        <div className="hero flex justify-between container">
          <p className="styled-logo text-2xl font-extrabold flex items-center justify-center">
            Unleash Your Imagination. <br />
            Explore a Universe of eBooks.
          </p>

          <Image
            src={"/images/illustration.svg"}
            alt="illustration"
            height={500}
            width={500}
          ></Image>
        </div>
      </div>
    </div>
  );
}

/**
 * <div className="flex flex-col *:text-bae-700">
        <Link href={"/auth/login"}>Login</Link>
        <Link href={"/auth/register"}>register</Link>
        <Link href={"/profile"}>profile</Link>
        <Link href={"/dashboard"}>dashboard</Link>
        <Link href={"/test"}>test</Link>
        <Link href={"/magix"}>magix</Link>
        <Link href={"/admin"}>admin</Link>
      </div>
 */
