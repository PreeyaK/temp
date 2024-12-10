import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

type PaginationProps = {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={(_, page) => onPageChange(page)}
      sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}
    />
  );
};

export default Pagination;
