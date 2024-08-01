import { createBrowserRouter, useLoaderData, useNavigate, useRouteError } from 'react-router-dom';
import App from '../App';
import Login from '../components/login-in';
import Register from '../components/register';
import { Button } from '@mui/material';

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  const images = [
    <img className="h-96" src="/404/1.jpeg" />,
    <img className="h-96" src="/404/2.jpeg" />,
    <img className="h-96" src="/404/3.jpeg" />,
    <img className="h-96" src="/404/4.jpeg" />,
    <img className="h-96" src="/404/5.jpeg" />
  ];
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-10 bg-gradient-to-b from-white to-red-400">
      <h1 className="text-4xl text-red-600">Page Not Found 404!!</h1>
      {images[Math.floor(Math.random() * 5)]}
      <Button onClick={() => navigate('/')} className="" variant="outlined" color="error">
        Take me back
      </Button>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => ({ message: 'Hello Data Router!' }),
    Component() {
      const data = useLoaderData() as { message: string };
      data;
      return <App />;
    },
    errorElement: <ErrorBoundary />
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
