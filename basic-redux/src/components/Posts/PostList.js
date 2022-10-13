import React from 'react';
import { useSelector } from 'react-redux';
import { PostCard } from '../PostCard';

export const PostList = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts,"posts")
  return (
    <div>
        {posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  )
}
