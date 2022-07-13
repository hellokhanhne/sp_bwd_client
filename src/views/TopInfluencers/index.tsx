import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Checkbox, Col, Input, Pagination, Row, Spacer, Table, User } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { IconSlide } from '~/components/Slider/IconSlider';
import users from '../../constants/response.json';
import './index.scss';
import Load from '~/components/Loading/Loading';

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
interface dataI {
  name: string;
  image: string;
  like: string;
  view: string;
  follow: string;
  video: string;
  key: number;
}
export default function TopInfluencers() {
  let datainit: dataI[] = [];
  const [data, setData] = useState(datainit);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      setData((pre) => [...pre, users[i]]);
    }
    setLoading(false);
  }, []);

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
              <p>{user.name}</p>
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
  if (loading) {
    return <Load />;
  } else
    return (
      <div className='container-fluid py-5 influencers'>
        <div className='container'>
          <div className='title font-popin'>Top 100 Most-Followed Tiktok Accounts</div>
          <div className='row'>
            <div className='col-lg-3'>
              <Input
                label='Search influencer'
                placeholder='Search ...'
                fullWidth
                color='primary'
                labelRight={<FontAwesomeIcon icon={faSearch} />}
              />
              <Spacer y={2} />
              <Checkbox defaultSelected={true}>
                <p>TikTok</p>
              </Checkbox>
              <br />
              <Checkbox>
                <p>Facebook</p>
              </Checkbox>
              <br />
              <Checkbox>
                <p>Youtube</p>
              </Checkbox>
              <br />
              <Checkbox>
                <p>Instagram</p>
              </Checkbox>
              <br />
              <Checkbox>
                <p>Linkedin</p>
              </Checkbox>
              <br />
              <Checkbox>
                <p>Twitter</p>
              </Checkbox>
              <br />
            </div>
            <div className='col-lg-9'>
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
                    <Table.Column
                      key={column.key}
                      align={column.key === 'details' ? 'center' : 'start'}
                    >
                      {column.label}
                    </Table.Column>
                  )}
                </Table.Header>
                <Table.Body items={data}>
                  {(item) => (
                    <Table.Row>
                      {(columnKey) => <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>}
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>

              <div className='row d-flex justify-content-between'>
                <div className='col-5'></div>
                <div className='col-7'>
                  <Spacer y={1} /> <Pagination total={10} shadow initialPage={1} />
                </div>
              </div>
            </div>
          </div>

          <div className='position-fixed fixed-bottom'>
            <IconSlide />
          </div>
        </div>
      </div>
    );
}
