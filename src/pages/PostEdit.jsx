import {
  Form,
  useLoaderData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import '../styles/PostEdit.css';

export default function PostEdit() {
  const post = useLoaderData();

  const navigate = useNavigate();
  const navigation = useNavigation();

  const handleCancel = () => {
    navigate(-1);
  };

  const loading =
    navigation.state === 'loading' || navigation.state === 'submitting';

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
              defaultValue={post.title}
              required
            />
          </label>

          <label className="form-label">
            <span>본문</span>
            <textarea
              name="body"
              className="form-textarea"
              placeholder="내용을 입력하세요"
              defaultValue={post.body}
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
            <button type="submit" className="save-button" disabled={loading}>
              {loading ? '저장 중...' : '저장'}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
