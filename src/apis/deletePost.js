const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default async function deletePost(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  return res.ok;
}
