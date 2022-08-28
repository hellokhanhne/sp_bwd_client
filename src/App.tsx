import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import { publicRoutes } from './routers';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Loader from './components/atoms/LoaderRender/Loader';
import { useSelector } from 'react-redux';
function App() {
  const sate=useSelector(state=>state)
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  },[]);
  console.log(sate)
  return (
    <>
      <Routes>
        <Route path='/loading' element={<Loader />} />
        {publicRoutes.map((item, i) => (
          <Route
            key={i}
            path={item.path}
            element={
              <BaseLayout bannerShow={['/'].includes(item.path) ? true : false}>
                <>{item.element}</>{' '}
              </BaseLayout>
            }
          />
        ))}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
