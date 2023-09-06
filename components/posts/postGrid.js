import React from "react";
import PostItem from "./postItem";

export default function PostGrid({ posts }) {
  return (
    <ul className="flex flex-wrap gap-5">
      {posts.map((post) => (
        <PostItem key={post.title} post={post} />
      ))}
    </ul>
  );
}
