import { API_BASE_URL } from './config';

export async function getPostById(postId) {
  const response = await fetch(`${API_BASE_URL}/${postId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  const post = await response.json();
  return post;
}
