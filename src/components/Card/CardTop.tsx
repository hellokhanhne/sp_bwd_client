import React from 'react';
import { Card, Text } from '@nextui-org/react';
import { CountUp } from 'use-count-up';

const CardTop = ({ cardTitle, value, cardSubtitle, color }: any) => (
  <Card
    variant='bordered'
    className={`shadow `}
    style={{ borderBottomWidth: 5, borderBottomColor: color }}
  >
    <Card.Header>
      <Text h4>{cardTitle}</Text>
    </Card.Header>
    <Card.Body>
      <Text h1 color={color} className='fs-2'>
        <CountUp isCounting end={value} duration={3.2} key={value} /> +
      </Text>
      <Text>{new Date().toDateString()}</Text>
      <Text>{cardSubtitle}</Text>
    </Card.Body>
  </Card>
);

export default CardTop;
