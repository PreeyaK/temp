import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

type PostCardProps = {
  post: {
    id: number;
    title: string;
    by: string;
    url: string;
    score: number;
    time: number;
  };
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h3">
          <Link href={post.url} target="_blank" rel="noopener">
            {post.title}
          </Link>
        </Typography>
        <Typography variant="body1">
          By {post.by} | {post.score} points
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
