import React, { useLayoutEffect } from 'react';
import useScript from '~/hooks/useScript';
const urls = [
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r66/three.min.js',
  'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
  'https://s3-eu-west-1.amazonaws.com/three-globe-assets/js/TrackballControls.js',
  'https://s3-eu-west-1.amazonaws.com/three-globe-assets/js/geodata.js',
  'https://s3-eu-west-1.amazonaws.com/three-globe-assets/js/threeGeoJSON.js',
  'index.js',
];
let url: string;
const Banner = () => {
  for (url of urls) {
    useScript(url);
  }

  return (
    <div className='slider-banner'>
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
      <div className='left d-flex justify-content-end'></div>
    </div>
  );
};

export default Banner;
