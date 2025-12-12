import { useEffect, useState, useRef } from 'react';
import '../styles/PostList.css';
import getAllPosts from '../apis/getAllPosts';
import deletePost from '../apis/deletePost';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx';

export default function PostList() {
  const [allPosts, setAllPosts] = useState([]); // 전체 데이터
  const [posts, setPosts] = useState([]); // 화면에 보여지는 데이터
  const [page, setPage] = useState(1); // 현재 페이지
  const postsPerPage = 10; // 한 페이지에 보여줄 데이터 수

  const loaderRef = useRef(null); // 무한스크롤 감지용 DOM 요소
  const listRef = useRef(null);

  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    getAllPosts().then((res) => {
      setAllPosts(res);
      setPosts(allPosts.slice(0, postsPerPage)); // 처음 렌더링 10개 데이터만
    });
  }, []);

  useEffect(() => {
    if (!listRef.current) return;

    const items = listRef.current.querySelectorAll('li');
    items.forEach((item) => {
      setTimeout(() => {
        item.classList.add('fade-in');
      }, 500);
    });
  }, [posts]);

  // IntersectionObserver 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const nextPage = page + 1;
          const nextPosts = allPosts.slice(0, nextPage * postsPerPage);

          if (nextPosts.length !== posts.length) {
            setPosts(nextPosts);
            setPage(nextPage);
          }
        }
      },
      { root: null, rootMargin: '0px', threshold: 1.0 }
    );

    // loaderRef div 관찰
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [page, allPosts]);

  const handleDelete = async () => {
    if (openModal === null) return;

    await deletePost(openModal);
    setOpenModal(null);
    setPosts((prev) => prev.filter((p) => p.id !== openModal));
  };

  return (
    <div className="postListSection">
      <h3>Posts Lists</h3>
      <ul ref={listRef}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.id}. {post.title}
            </Link>{' '}
            <Button onClick={() => setOpenModal(post.id)}>Delete</Button>
          </li>
        ))}
      </ul>

      <div ref={loaderRef}></div>

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
                <Button onClick={handleDelete}>Yes</Button>
                <Button onClick={() => setOpenModal(null)}>No</Button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
