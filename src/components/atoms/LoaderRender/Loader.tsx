import React, { FC } from 'react';
import './Loader.scss';

const Loader: FC = () => {
  return (
    <div className='col d-flex justify-content-center loadding' >
      <div className='sk-folding-cube'>
        <div className='sk-cube1 sk-cube'></div>
        <div className='sk-cube2 sk-cube'></div>
        <div className='sk-cube4 sk-cube'></div>
        <div className='sk-cube3 sk-cube'></div>
      </div>
    </div>
  );
};

export default Loader;
