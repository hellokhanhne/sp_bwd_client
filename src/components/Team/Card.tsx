import React from 'react';

const Member = ({ img }: { img: string }) => {
  return (
      <div className='image-area'>
        <img src={img} alt='Harun Doğdu' />
      </div>
  );
};

export default Member;
