"use client";
import Link from "next/link";
// import { RecoilRoot } from "recoil";

export default function Home() {
  return (
      <div className="flex flex-col *:text-bae-700">
        <Link href={"/auth/login"}>Login</Link>
        <Link href={"/auth/register"}>register</Link>
        <Link href={"/profile"}>profile</Link>
        <Link href={"/dashboard"}>dashboard</Link>
        <Link href={"/test"}>test</Link>
        <Link href={"/magix"}>magix</Link>
        <Link href={"/admin"}>admin</Link>
      </div>
  );
}
