import FeaturedPosts from "@/components/homePage/featuredPost";
import Hero from "@/components/homePage/hero";
import { getFeaturedPosts } from "@/lib/postUtil";
import Head from "next/head";
import React from "react";

export default function HomePage({ posts }) {
  return (
    <div className="flex-col justify-center items-center min-h-screen">
      <Head>
        <title>Personal blog</title>
        <meta name='description' content='Personal blog' />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 36000,
  };
}
