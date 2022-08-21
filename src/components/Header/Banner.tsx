import React from 'react';
import { Link } from 'react-router-dom';
import { iconnect } from '~/assets';
class Banner extends React.Component {

  public render() {
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
        <div className=' d-flex justify-content-end' id='threeEarth' style={{ height: 388 }}>
            <img src={iconnect} />
        </div>
      </div>
    );
  }
}

export default Banner;
