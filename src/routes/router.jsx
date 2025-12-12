import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import PostDetail from '../pages/PostDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'posts/:id',
        element: <PostDetail />,
      },
    ],
  },
]);

export default router;
