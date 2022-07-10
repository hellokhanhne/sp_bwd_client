import { useContext } from 'react';
import Footer from '~/components/Footer/Footer';
import { Header } from '~/components/Header';
import Banner from '~/components/Header/Banner';
import { IThemeContext, ThemeContext } from '~/context/ThemeContext';

const BaseLayout = ({ children }: { children: JSX.Element }) => {
  const {
    themeState: { mode },
    setMode,
  } = useContext(ThemeContext) as IThemeContext;

  return (
    <div className={mode}>
      <Header setMode={setMode} />
      <Banner />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
