import { useEffect, useState } from 'react';
import '../styles/PostList.css';
import getAllPosts from '../apis/getAllPosts';
import deletePost from '../apis/deletePost';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    getAllPosts().then((res) => {
      setPosts(res);
    });
  }, []);

  const handleDelete = async () => {
    if (openModal === null) return;

    await deletePost(openModal);
    setOpenModal(null);
    setPosts((prev) => prev.filter((p) => p.id !== openModal));
  };

  return (
    <div className="postListSection">
      <h3>Posts Lists</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.id}. {post.title}
            </Link>{' '}
            <button onClick={() => setOpenModal(post.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {openModal &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="deleteModal">
              <h3>Are you sure you want to delete id={openModal} post?</h3>
              <div className="deleteModalBtn">
                <button onClick={handleDelete}>Yes</button>
                <button onClick={() => setOpenModal(null)}>No</button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
