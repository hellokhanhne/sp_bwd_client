import { Button, Checkbox, Input, Modal, Row, Text } from '@nextui-org/react';
import { Mail, Password } from '../icons';
import React from 'react';

const LoginModal = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <React.Fragment>
      <button onClick={handler} className='button button-primary'>
        Login
      </button>
      <Modal
        closeButton
        animated={false}
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Welcome to
            <Text className='ms-2 logo' b size={18}>
              iConnect
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Email'
            contentLeft={<Mail fill='currentColor' />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Password'
            contentLeft={<Password fill='currentColor' />}
          />
          <Row justify='space-between'>
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color='error' onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default LoginModal;
