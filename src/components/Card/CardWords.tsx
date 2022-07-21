import React from 'react';
import './Card.scss';
const CardWords = ({ desc, name, img }: { desc: string; name: string; img: string }) => {
  return (
    <div className='word-item'>
      <p>{desc}</p>
      <div className='user-info'>
        <div
          className='avatar'
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <div className='info'>
          <p className='word-name'>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardWords;
