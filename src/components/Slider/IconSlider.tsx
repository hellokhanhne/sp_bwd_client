import React from 'react';
import Marquee, {
  Scale,
  randomIntFromInterval,
  randomFloatFromInterval,
  Motion,
} from 'react-marquee-slider';
import { Avatar } from '@nextui-org/react';
import { listicon } from '~/constants/listicon';

interface Iicons {
  initDeg: number;
  direction: 'clockwise' | 'counterclockwise';
  scale: number;
}

export const IconSlide = () => {
  const iconsMeta: Iicons[] = [];
  for (let i = 0; i < listicon.length; i++) {
    iconsMeta.push({
      initDeg: randomIntFromInterval(0, 360),
      direction: Math.random() > 0.5 ? 'clockwise' : 'counterclockwise',
      scale: randomFloatFromInterval(0.7, 1),
    });
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        background: 'transparent',
      }}
    >
      <Marquee
        direction='ltr'
        velocity={50}
        scatterRandomly={false}
        resetAfterTries={10}
        onInit={() => {}}
        onFinish={() => {}}
      >
        {listicon.map((item, index) => (
          <Scale scale={iconsMeta[index].scale} key={`marquee-example-playground-${index}`}>
            <Motion
              {...iconsMeta[index]}
              velocity={100}
              radius={100}
              backgroundColors={{
                buffer: 'transparent',
                earth: 'transparent',
                solarSystem: 'transparent',
              }}
            >
              <Avatar src={item.img} />
            </Motion>
          </Scale>
        ))}
      </Marquee>
    </div>
  );
};
