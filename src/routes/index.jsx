import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddBlog from '../pages/AddBlog';
import AllBlogs from '../pages/AllBlogs';
import FeaturedBlogs from '../pages/FeaturedBlogs';
import Wishlist from '../pages/Wishlist';
import BlogDetails from '../pages/BlogDetails';
import UpdateBlog from '../pages/UpdateBlog';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../pages/ErrorPage';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "*",
        element:<ErrorPage/>,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'add-blog',
        element: <PrivateRoute><AddBlog /></PrivateRoute>,
      },
      {
        path: 'all-blogs',
        element: <AllBlogs/>,
      },
      {
        path: 'featured-blogs',
        element: <FeaturedBlogs />,
      },
      {
        path: 'wishlist',
        element: <PrivateRoute><Wishlist /></PrivateRoute>,
      },
      {
        path: 'blog-details/:id',
        element: <PrivateRoute><BlogDetails /></PrivateRoute>,
      },
      {
        path: 'update-blog/:id',
        element: <PrivateRoute><UpdateBlog /></PrivateRoute>,
      }

    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
//   {
//     path: '/user',
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Profile />,
//       },
//       {
//         path: 'orders',
//         element: <TrackOrder />,
//       },
//     ],
//   },
 
]);

export default routes;