import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import PostDetail from '../pages/PostDetail';

import { getPostById } from '../apis/getPostById';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'posts/:id',
        element: <PostDetail />,
        loader: async ({ params }) => await getPostById(params.id),
      },
    ],
  },
]);

export default router;
