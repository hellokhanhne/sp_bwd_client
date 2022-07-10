import { Route, Routes } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import { publicRoutes } from './routers';
import Home from './views/Home';
function App() {
  return (
    <>
      <BaseLayout>
        <Routes>
          {publicRoutes.map((item, i) => (
            <Route key={i} path={item.path} element={item.element} />
          ))}
        </Routes>
      </BaseLayout>
    </>
  );
}

export default App;
