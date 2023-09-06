import React from 'react'
import PostGrid from './postGrid'

export default function AllPosts({posts}) {
  return (
    <section>
      <h1 className="text-center pt-10">All posts</h1>
      <div className='flex flex-wrap justify-center pt-5'>
        <PostGrid posts={posts} />
      </div>
    </section>
  );
}
