import { Card, Input, Row, Spacer, Switch, Text } from '@nextui-org/react';
import React from 'react';
import { Mail, Password } from '~/components/icons';
import './register.scss';
const Register = () => {
  return (
    <div className='register container-fluid d-flex justify-content-center pt-5'>
      <div className='col-12 col-sm-7 col-md-6 col-lg-5 pb-3'>
        <Card css={{ borderRadius: '24px', boxShadow: '0px 12px 16px 0px rgb(55 83 250 / 12%)' }}>
          <Card.Header css={{ justifyContent: 'center' }}>
            <Text h2 className='logo fw-bold'>
              iConnect
            </Text>
          </Card.Header>
          <Card.Body css={{ alignItems: 'center' }}>
            <Text h3 className=' fw-bold'>
              Register
            </Text>
            <Spacer y={2}/>
            <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Email'
            contentLeft={<Mail fill='currentColor' />}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Password'
            contentLeft={<Password fill='currentColor' />}
          />
          <Row justify='space-between'>
            <Switch>
              <Text size={14}>Remember me</Text>
            </Switch>
            <Text size={14}>Forgot password?</Text>
          </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Register;
