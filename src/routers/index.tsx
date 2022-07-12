import About from '~/views/About';
import Contact from '~/views/Contact/Contact';
import Home from '~/views/Home';
import TopInfluencers from '~/views/TopInfluencers';
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
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/top-influencers',
    element: <TopInfluencers />,
  },
];

export const privateRoutes = [{}];
