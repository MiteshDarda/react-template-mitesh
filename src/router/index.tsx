import { createBrowserRouter, useLoaderData } from 'react-router-dom';
import App from '../App';
import Login from '../components/login-in';
import Register from '../components/register';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => ({ message: 'Hello Data Router!' }),
    Component() {
      const data = useLoaderData() as { message: string };
      data;
      return <App />;
    }
  },
  {
    path: '/login',
    loader: () => ({ message: 'Hello Data Router!' }),
    Component() {
      const data = useLoaderData() as { message: string };
      data;
      return <Login />;
    }
  },
  {
    path: '/register',
    loader: () => ({ message: 'Hello Data Router!' }),
    Component() {
      const data = useLoaderData() as { message: string };
      data;
      return <Register />;
    }
  }
]);

export default router;
