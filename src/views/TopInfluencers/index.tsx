import { Col, Row, Table, User } from '@nextui-org/react';
import React from 'react';
import { IconSlide } from '~/components/Slider/IconSlider';
import users from '../../constants/response.json';
import './index.scss';

const columns = [
  {
    key: '#',
    label: '#',
  },
  {
    key: 'name',
    label: 'Account',
  },
  {
    key: 'follow',
    label: 'Following',
  },
  {
    key: 'like',
    label: 'Like number',
  },
  {
    key: 'view',
    label: 'Views',
  },
  {
    key: 'video',
    label: 'Video number',
  },
];

export default function TopInfluencers() {
  const renderCell = (user: any, columnKey: any) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case '#':
        return (
          <Col>
            <Row>
              <span className='text-muted'>{user.key}</span>
            </Row>
          </Col>
        );
      case 'name':
        return (
          <Col>
            <User squared src={user.image} name={cellValue}>
              {user.name}
            </User>
          </Col>
        );

      case 'follow':
        return (
          <Col>
            <Row>{user.follow}</Row>
          </Col>
        );

      case 'like':
        return (
          <Col>
            <Row>{user.like}</Row>
          </Col>
        );

      case 'view':
        return (
          <Col>
            <Row>{user.view}</Row>
          </Col>
        );

      case 'video':
        return (
          <Col>
            <Row>{user.video}</Row>
          </Col>
        );

      default:
        return cellValue;
    }
  };
  return (
    <div className='container py-5 influencers'>
      <div className='title font-popin'>Top 100 Most-Followed Instagram Accounts</div>
      <Table
        aria-label='Example table with custom cells'
        bordered
        shadow={false}
        css={{
          height: 'auto',
          minWidth: '100%',
        }}
        selectionMode='none'
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key} align={column.key === 'details' ? 'center' : 'start'}>
              {column.label}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={users}>
          {(item) => (
            <Table.Row>
              {(columnKey) => <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      <div className='position-fixed fixed-bottom'>
        <IconSlide />
      </div>
    </div>
  );
}
