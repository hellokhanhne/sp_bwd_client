import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Input, Spacer, Text } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { Mail, Password } from '~/components/icons';
import Google from '~/components/icons/Google';
import './register.scss';

const Register = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/index.js';
    script.async = true;
    document.body.appendChild(script);
    console.log('loadscrit');
    return () => {
      console.log('remove script');
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='register container-fluid  py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-7 col-sm-9 col-12 ' style={{ zIndex: 999 }}>
            <Card
              css={{
                width: '100%',
                borderRadius: '24px',
                boxShadow: '0px 12px 16px 0px #aaa',
                background: 'transparent',
              }}
            >
              <Card.Header css={{ justifyContent: 'center' }}>
                <Text h2 className='logo fw-bold pb-1'>
                  Register
                </Text>
              </Card.Header>
              <Card.Body css={{ alignItems: 'center' }}>
                <Input
                  clearable
                  bordered
                  fullWidth
                  color='primary'
                  size='lg'
                  placeholder='Full name'
                  contentLeft={<FontAwesomeIcon icon={faUser} />}
                />
                <Spacer y={1} />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color='primary'
                  size='lg'
                  placeholder='Email'
                  contentLeft={<Mail fill='currentColor' />}
                />
                <Spacer y={1} />
                <Input.Password
                  clearable
                  bordered
                  fullWidth
                  color='primary'
                  size='lg'
                  placeholder='Password'
                  contentLeft={<Password fill='currentColor' />}
                />
                <Spacer y={1} />
                <Input.Password
                  clearable
                  bordered
                  fullWidth
                  color='primary'
                  size='lg'
                  placeholder='Password comfrim'
                  contentLeft={<Password fill='currentColor' />}
                />
              </Card.Body>
              <Card.Footer css={{ flexDirection: 'column' }}>
                <Button rounded bordered ghost style={{ width: '70%' }}>
                  Sign Up
                </Button>
                <hr className='hr-text' data-content='OR' style={{ width: '50%' }} />
                <Button
                  rounded
                  bordered
                  ghost
                  color='primary'
                  icon={<Google />}
                  style={{ width: '70%' }}
                >
                  Continue with google
                </Button>
              </Card.Footer>
            </Card>
          </div>
          <div className='col-12 mt-5 pt-5' style={{ position: 'absolute' }}>
            <div className='left d-flex justify-content-end ' id='threeEarth'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
