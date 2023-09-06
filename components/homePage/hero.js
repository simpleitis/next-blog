import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex justify-center items-center p-10 bg-lime-300 min-h-[50vh]">
      <div className="flex-col">
        <Image src="/next.svg" alt='hero' width={300} height={300} />
        <h1 className="text-center mt-10  text-xl">Hi I am Amar</h1>
        <h2 className="text-center mt-5 text-2xl">I am a web developer</h2>
      </div>
    </div>
  );
}
