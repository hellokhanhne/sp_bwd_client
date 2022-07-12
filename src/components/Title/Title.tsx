import React from 'react';

const Title = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className='title'>
      <h5 className='title-h5'>{text}</h5>
      <h2 className='title-h2'>{title}</h2>
    </div>
  );
};

export default Title;
