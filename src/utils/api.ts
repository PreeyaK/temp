import axios from 'axios';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const fetchPostIds = async (type: 'top' | 'new'): Promise<number[]> => {
  const endpoint = type === 'top' ? 'topstories' : 'newstories';
  const response = await axios.get(`${BASE_URL}/${endpoint}.json`);
  return response.data;
};

export const fetchPostDetails = async (postId: number) => {
  const response = await axios.get(`${BASE_URL}/item/${postId}.json`);
  return response.data;
};
