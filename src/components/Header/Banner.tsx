import React from 'react';
import { Link } from 'react-router-dom';
import useScript from '~/hooks/useScript';
const urls = [
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r66/three.min.js',
  'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
  // 'https://s3-eu-west-1.amazonaws.com/three-globe-assets/js/TrackballControls.js',
  // 'https://s3-eu-west-1.amazonaws.com/three-globe-assets/js/geodata.js',
  // 'https://s3-eu-west-1.amazonaws.com/three-globe-assets/js/threeGeoJSON.js',
  'index.js',
];
let url: string;
const Banner = () => {
  for (url of urls) {
    useScript(url);
  }

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
      <div className='position-absolute top-50 start-0 ms-5 items-center'>
        <div className='top-banner-info'>
          <h3 className=''>
            Top Influencer Marketing Software <br /> for Influencers and Brands —
          </h3>
          <h2 className='ps-4 logo'>iConnect</h2>
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
