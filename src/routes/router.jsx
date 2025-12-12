import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import PostEdit from '../pages/PostEdit';

import { getPostById } from '../apis/getPostById.js';
import { updatePost } from '../apis/updatePost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'posts/:id/edit',
        element: <PostEdit />,
        loader: async ({ params }) => await getPostById(params.id),
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const updatedPost = {
            title: formData.get('title'),
            body: formData.get('body'),
          };
          return updatePost(params.id, updatedPost);
        },
      },
    ],
  },
]);

export default router;
