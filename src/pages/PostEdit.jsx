import { Form, useLoaderData, useNavigate } from 'react-router-dom';
import '../styles/PostEdit.css';

export default function PostEdit() {
  const post = useLoaderData();

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="post-edit-container">
      <div className="post-edit-wrapper">
        <header className="post-edit-header">
          <h2 className="edit-title">포스트 수정</h2>
          <div className="post-meta">Post #{post.id}</div>
        </header>

        <Form className="post-edit-form">
          <label className="form-label">
            <span>제목</span>
            <input
              name="title"
              className="form-input"
              placeholder="제목을 입력하세요"
              required
            />
          </label>

          <label className="form-label">
            <span>본문</span>
            <textarea
              name="body"
              className="form-textarea"
              placeholder="내용을 입력하세요"
              rows={10}
              required
            />
          </label>

          <div className="post-edit-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              취소
            </button>
            <button type="submit" className="save-button">
              저장
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
