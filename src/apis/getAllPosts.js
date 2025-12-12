const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default async function getAllPosts() {
  const res = await fetch(API_URL);
  return res.json();
}
