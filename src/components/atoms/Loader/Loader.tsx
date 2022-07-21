import React, { FC } from 'react';
import './Loader.css';

const Loader: FC = () => {
  return (
    <div className='col d-flex justify-content-center '>
      <div className='spinner'></div>
    </div>
  );
};

export default Loader;
