import React, { useState, useEffect } from 'react';
import { fetchPostDetails } from '../utils/api.ts';
import PostCard from './PostCard';
import { Box } from '@mui/material';

type PostListProps = {
  postIds: number[];
  currentPage: number;
  postsPerPage: number;
};

const PostList: React.FC<PostListProps> = ({ postIds, currentPage, postsPerPage }) => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const fetchPosts = async () => {
      const selectedPosts = postIds.slice(start, end);
      const postDetails = await Promise.all(selectedPosts.map(fetchPostDetails));
      setPosts(postDetails);
    };
    fetchPosts();
  }, [postIds, currentPage, postsPerPage]);

  return (
    <Box>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default PostList;
