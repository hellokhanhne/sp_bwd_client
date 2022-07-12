import React, { useState } from 'react';
import Marquee, { Scale } from 'react-marquee-slider';
import CardWords from '../Card/CardWords';
import { influencerstop } from '~/constants/data';
export const MarqueeSlide = () => {
  const [loading, setLoading] = useState(true);

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
        velocity={20}
        scatterRandomly={false}
        resetAfterTries={100}
        onInit={() => setLoading(true)}
        onFinish={() => setLoading(false)}
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
