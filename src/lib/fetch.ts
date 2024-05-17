import { HOST } from '@/constant';

const makeOptions = (options: RequestInit = {}) => {
  // const token = localStorage.getItem('accessToken');

  return {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      // Authorization: 'Bearer ' + token,
    },
  };
};

export const fetcher = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(HOST, makeOptions(options));

  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.');
  }

  return res.json();
};
