"use client";

import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [subscriber, setSubscriber] = useState(102);
  return (
    <div className="h-dvh">
      <div className="stats h-12 flex items-center pl-4 font-bold text-2xl">
        Statictics
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 p-2">
        <div className="rounded-lg border border-solid border-stone-300 p-4">
          <div className="h-24 flex flex-col justify-between">
            <div className="text-5xl font-bold">{subscriber}</div>
            <div className="text-stone-400 flex items-center justify-between">
              <span>Test</span>
              <Link href={"/addtest"} className="icon text-2xl">
                add
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-solid border-stone-300 p-4">
          <div className="h-24 flex flex-col justify-between">
            <div className="text-5xl font-bold">{subscriber}</div>
            <div className="text-stone-400">Videos</div>
          </div>
        </div>
        <div className="rounded-lg border border-solid border-stone-300 p-4">
          <div className="h-24 flex flex-col justify-between">
            <div className="text-6xl font-bold">{subscriber}</div>
            <div className="text-stone-400">Notifications</div>
          </div>
        </div>
        <div className="rounded-lg border border-solid border-stone-300 p-4">
          <div className="h-24 flex flex-col justify-between">
            <div className="text-6xl font-bold">{subscriber}</div>
            <div className="text-stone-400">Subscriber</div>
          </div>
        </div>
        <div className="rounded-lg border border-solid border-stone-300 p-4">
          <div className="h-24 flex flex-col justify-between">
            <div className="text-6xl font-bold">{subscriber}</div>
            <div className="text-stone-400">Subscriber</div>
          </div>
        </div>
        <div className="rounded-lg border border-solid border-stone-300 p-4">
          <div className="h-24 flex flex-col justify-between">
            <div className="text-6xl font-bold">{subscriber}</div>
            <div className="text-stone-400">Subscriber</div>
          </div>
        </div>
        <div className="rounded-lg border border-solid border-stone-300 p-4">
          <div className="h-24 flex flex-col justify-between">
            <div className="text-6xl font-bold">{subscriber}</div>
            <div className="text-stone-400">Subscriber</div>
          </div>
        </div>
        <div className="rounded-lg border border-solid border-stone-300 p-4">
          <div className="h-24 flex flex-col justify-between">
            <div className="text-6xl font-bold">{subscriber}</div>
            <div className="text-stone-400">Subscriber</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
