import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PostItem({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className="border border-green-400 w-64">
      <Link href={`/posts/${post.slug}`}>
        <div className="w-full">
          <Image src={post.image} alt={post.image} width={305} height={200} />
        </div>
        <div className="mt-5 p-3">
          <h2 className="font-bold ">{post.title}</h2>
          <time className="font-medium ">{formattedDate}</time>
          <p className="mt-5">{post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
