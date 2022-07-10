import About from '~/views/About';
import Login from '~/views/Auth/Login';
import Home from '~/views/Home';
interface iPublicRoute {
  path: string;
  element: JSX.Element;
}
export const publicRoutes: iPublicRoute[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export const privateRoutes = [{}];
