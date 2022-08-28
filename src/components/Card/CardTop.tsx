import React from 'react';
import { Card, Text } from '@nextui-org/react';
import { CountUp } from 'use-count-up';

const CardTop = ({ cardTitle, value, cardSubtitle, color }: any) => (
  <Card
    variant='bordered'
    css={{ borderRadius: '15px', boxShadow: `0px 5px 5px 0px ${color}`, background: 'unset' }}
    // data-aos='zoom-in-right'
  >
    <Card.Header>
      <Text h4 className='font-popin'>
        {cardTitle}
      </Text>
    </Card.Header>
    <Card.Body className='pt-0'>
      <Text h1 color={color} className='fs-2'>
        <CountUp isCounting end={value} duration={3.2} key={value} /> +
      </Text>
      <Text>{new Date().toDateString()}</Text>
      <Text>{cardSubtitle}</Text>
    </Card.Body>
  </Card>
);

export default CardTop;
