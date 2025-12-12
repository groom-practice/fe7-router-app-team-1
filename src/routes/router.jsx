import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import PostEdit from '../pages/PostEdit';

import { getPostById } from '../apis/getPostById.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'posts/:id/edit',
        element: <PostEdit />,
        loader: async ({ params }) => await getPostById(params.id),
      },
    ],
  },
]);

export default router;
