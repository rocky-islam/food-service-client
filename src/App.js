import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import MyReview from './components/MyReview/MyReview';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Review from './components/Review/Review';
import AllService from './components/Services/AllService';
import SignUp from './components/SignUp/SignUp';
import UpdateReview from './components/UpdateReview/UpdateReview';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/services",
          element: <AllService></AllService>,
        },
        {
          path: "/services/:id",
          element: <Review></Review>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
          path: "/reviews",
          element: (
            <PrivateRoute>
              <MyReview></MyReview>
            </PrivateRoute>
          ),
        },
        {
          path: "/update/:id",
          element: <UpdateReview></UpdateReview>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/reviews/${params.id}`),
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
