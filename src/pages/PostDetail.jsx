import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import '../styles/PostDetail.css';

export default function PostDetail() {
  const post = useLoaderData();

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
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
          <button className="edit-button">수정하기</button>
          <button className="delete-button">삭제하기</button>
        </div>
      </div>
    </div>
  );
}
