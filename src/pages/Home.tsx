import React, { useState, useEffect } from 'react';
import { fetchPostIds } from '../utils/api.ts';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';
import { Box, Button, Typography } from '@mui/material';

const Home: React.FC = () => {
  const [postType, setPostType] = useState<'top' | 'new'>('top');
  const [postIds, setPostIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchIds = async () => {
      const ids = await fetchPostIds(postType);
      setPostIds(ids);
      setCurrentPage(1);
    };
    fetchIds();
  }, [postType]);

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Button
          variant={postType === 'top' ? 'contained' : 'outlined'}
          onClick={() => setPostType('top')}
          sx={{ marginRight: 1 }}
        >
          Top Posts
        </Button>
        <Button
          variant={postType === 'new' ? 'contained' : 'outlined'}
          onClick={() => setPostType('new')}
        >
          New Posts
        </Button>
      </Box>
      <PostList postIds={postIds} currentPage={currentPage} postsPerPage={postsPerPage} />
      <Pagination
        totalPosts={postIds.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Box>
  );
};

export default Home;
