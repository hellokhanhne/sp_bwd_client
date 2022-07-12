import React from 'react';
import Marquee, { Scale } from 'react-marquee-slider';
import CardWords from '../Card/CardWords';
import { influencerstop } from '~/constants/data';
export const MarqueeSlide = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '300px',
        background: 'transparent',
      }}
    >
      <Marquee
        direction='rtl'
        velocity={50}
        scatterRandomly={false}
        resetAfterTries={100}
        onInit={() => {}}
        onFinish={() => {}}
      >
        {influencerstop.map((item, index) => (
          <Scale scale={1} key={`marquee-example-playground-${index}`}>
            <CardWords desc={item.decs} img={item.img} name={item.name} />
          </Scale>
        ))}
      </Marquee>
    </div>
  );
};
