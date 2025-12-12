export async function updatePost(id, updatePost) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatePost),
    }
  );

  if (!response.ok) {
    throw new Error('수정에 실패했습니다.');
  }

  return null;
}
