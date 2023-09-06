import Image from "next/image";
import React from "react";

export default function PostHeader({ title, image }) {
  return (
    <header>
      <h1>{title}</h1>
      <Image src={image} width={200} height={200} alt={image}/>
    </header>
  );
}
