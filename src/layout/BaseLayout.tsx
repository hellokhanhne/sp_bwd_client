import { useContext } from 'react';
import Footer from '~/components/Footer/Footer';
import { Header } from '~/components/Header';
import Banner from '~/components/Header/Banner';
import { IThemeContext, ThemeContext } from '~/context/ThemeContext';

const BaseLayout = ({
  children,
  bannerShow = true,
}: {
  children: React.ReactNode;
  bannerShow?: boolean;
}) => {
  const {
    themeState: { mode },
    setMode,
  } = useContext(ThemeContext) as IThemeContext;

  return (
    <div className={mode}>
      <Header setMode={setMode} />
      {bannerShow && <Banner />}
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
