import React from 'react';
import './loading.scss';
const Load = () => {
  return (
    <div className='wrap-loader'>
      <div className='loader'>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='wrap-text'>
          <div className='text'>
            <span>I</span>
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>N</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>...</span>
          </div>
        </div>
      </div>
      <div className='loader-text'>wait please</div>
    </div>
  );
};

export default Load;
