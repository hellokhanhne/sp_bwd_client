import { Card, Row, Text } from '@nextui-org/react';
import { idol1, idol2, idol3, idol4, idol6, idol7, idol8, idol9 } from '../../assets';
export default function App() {
  const list = [
    {
      name: 'Orange',
      img: idol1,
      price: '$5.50',
    },
    {
      name: 'Lemon 2',
      img: idol7,
      price: '$8.00',
    },
    {
      name: 'Banana',
      img: idol8,
      price: '$7.50',
    },
    {
      name: 'Lemon',
      img: idol4,
      price: '$5.30',
    },
    {
      name: 'Tangerine',
      img: idol2,
      price: '$3.00',
    },
    {
      name: 'Raspberry',
      img: idol3,
      price: '$10.00',
    },

    {
      name: 'Advocato',
      img: idol6,
      price: '$15.70',
    },
    {
      name: 'Watermelon',
      img: idol9,
      price: '$12.20',
    },
  ];

  return (
    <div className='row mt-1'>
      {list.map((item, index) => (
        <div className='col-6 col-sm-3 mt-3' key={index}>
          <Card isPressable >
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit='cover'
                width='100%'
                height={140}
                alt={item.name}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: 'flex-start' }}>
              <Row wrap='wrap' justify='space-between' align='center'>
                <Text b>{item.name}</Text>
              </Row>
              <button className='button button-primary'>More</button>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
}
