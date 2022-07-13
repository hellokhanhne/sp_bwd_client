import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  useEffect(() => {
    const script = window.document.createElement('script');
    script.src = 'index.js';
    script.async = true;
    document.body.appendChild(script);
    console.log('loadscrit');
    return () => {
      console.log('remove script');
      document.body.removeChild(script);
    };
  }, []);

  console.log('mouted');

  return (
    <div className='slider-banner ' style={{ position: 'relative' }}>
      <div className='night'>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
        <div className='shooting_star'></div>
      </div>
      <div className='top-banner-wrapper'>
        <div className='top-banner-info'>
          <h3 className='fs-3'>
            Top Influencer Marketing Software <br /> for Influencers and Brands
          </h3>
          {/* <h2 className='ps-4 logo'>iConnect</h2> */}
          <div className='mt-3' style={{ width: 180 }}>
            <Link className='button button-primary' to='/register'>
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className='left d-flex justify-content-end'></div>
    </div>
  );
};

export default Banner;
