import { API_BASE_URL } from './config.js';

export async function deletePostById(postId) {
  const response = await fetch(`${API_BASE_URL}/${postId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  const post = await response.json();
  return post;
}
