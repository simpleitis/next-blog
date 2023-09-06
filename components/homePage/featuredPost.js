import React from "react";
import PostGrid from "../posts/postGrid";

export default function FeaturedPosts({ posts }) {
  return (
    <div className="flex flex-wrap gap-5 p-10">
      <PostGrid posts={posts} />
    </div>
  );
}
