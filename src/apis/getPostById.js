const API_URL = 'https://jsonplaceholder.typicode.com/posts';
export async function getPostById(postId) {
  const response = await fetch(`${API_URL}/${postId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  const post = await response.json();
  return post;
}
