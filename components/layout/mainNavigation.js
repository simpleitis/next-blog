import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainNavigation() {
  return (
    <header className="flex justify-between items-center px-5 bg-lime-300">
      <Link href='/'>
        <Image src='/vercel.svg' alt='logo' width={200} height={200} />
      </Link>
      <nav>
        <ul className="flex gap-x-5 p-10">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
