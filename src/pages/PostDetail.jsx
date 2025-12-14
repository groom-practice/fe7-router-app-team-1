import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { deletePostById } from '../apis/deletePostById.js';
import { getItem } from '../utils/storage.js';
import '../styles/pages/PostDetail.css';


const initialFavoriteState = JSON.parse(getItem('favoritePosts')) || [];

export default function PostDetail() {
  const post = useLoaderData();
  const navigate = useNavigate();


  const [isFavorite, setIsFavorite] = useState(
    initialFavoriteState.includes(post.id)
  );


  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    updateFavoriteState();
  };


  const updateFavoriteState = () => {
    if (isFavorite) {
      const updatedFavorites = initialFavoriteState.filter(
        (id) => id !== post.id
      );
      localStorage.setItem('favoritePosts', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...initialFavoriteState, post.id];
      localStorage.setItem('favoritePosts', JSON.stringify(updatedFavorites));
    }
  };


  const handleDelete = async () => {
    const confirm = window.confirm('정말로 이 게시물을 삭제하시겠습니까?');
    if (!confirm) return;

    try {
      await deletePostById(post.id);
    } catch (error) {
      console.error('게시물 삭제 실패:', error);
      alert('게시물 삭제에 실패했습니다. 다시 시도해주세요.');
      return;
    }

    alert('게시물이 성공적으로 삭제되었습니다.');
    navigate('/posts');
  };


  return (
    <div className="post-detail-container">
      <div className="post-detail-wrapper">
        <div className="post-detail-header">

          <span className="post-id">Post #{post.id}</span>

          <button
            className={`favorite-button ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            title={isFavorite ? '즐겨찾기 제거' : '즐겨찾기 추가'}
          >
            {isFavorite ? '★' : '☆'}
          </button>
        </div>

        <h1 className="post-title">{post.title}</h1>

        <div className="post-body">
          <p>{post.body}</p>
        </div>


        <div className="post-footer">
          <button
            className="edit-button"
            onClick={() => navigate(`/posts/${post.id}/edit`)}
          >
            수정하기
          </button>
          <button className="delete-button" onClick={handleDelete}>
            삭제하기
          </button>

        </div>
      </div>
    </div>
  );
}
