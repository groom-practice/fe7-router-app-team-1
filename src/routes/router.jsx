import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PostList from '../pages/PostList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: 'posts', element: <PostList /> }],
  },
]);

export default router;
