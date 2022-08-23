import * as React from 'react';

export interface IIntroductionProps {
  img: string;
  tip: string;
  title: string;
  list: string[];
  onClick?: () => void;
  reverse: boolean;
}

export default function Introduction({
  img,
  list,
  reverse,
  tip,
  title,
  onClick,
}: IIntroductionProps) {
  return (
    <div className={`row mt-5 ${reverse && 'flex-row-reverse'}`}>
      <div className='col-md-12 col-lg-5'>
        <img src={img} alt='' />
      </div>
      <div className='col-md-12 col-lg-7'>
        <div className='introduction'>
          <h3 className='introduction-tip'>{tip}</h3>
          <h1 className='introduction-title'>{title}</h1>
          <div className='introduction-devide'></div>
          <ul className='introduction-list-feature'>
            {list.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <button onClick={onClick} className='button button-secondary'>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
