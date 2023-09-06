import AllPosts from '@/components/posts/allPosts'
import { getAllPosts } from '@/lib/postUtil';
import React from 'react'

export default function AllPostsPage({posts}) {
  return (
    <div>
      <AllPosts posts={posts} />
    </div>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 36000,
  };
}