import { Button, Checkbox, Input, Modal, Row, Text } from '@nextui-org/react';
import { Mail, Password } from '../icons';
import React, { useContext } from 'react';
import { ThemeContext } from '~/context/ThemeContext';
import Google from '../icons/Google';

const LoginModal = () => {
  const [visible, setVisible] = React.useState(false);
  const context = useContext(ThemeContext);
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
        css={{ background: context?.themeState.mode === 'dark' ? '#292c34' : '' }}
      >
        <Modal.Header>
          <Text
            id='modal-title'
            size={18}
            css={{ color: context?.themeState.mode === 'dark' ? '#FFFFFF' : '' }}
          >
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
            <Checkbox>
              <Text size={14} css={{ color: context?.themeState.mode === 'dark' ? '#FFFFFF' : '' }}>
                Remember me
              </Text>
            </Checkbox>
            <Text size={14} css={{ color: context?.themeState.mode === 'dark' ? '#FFFFFF' : '' }}>
              Forgot password?
            </Text>
          </Row>
        </Modal.Body>
        <Modal.Footer justify='flex-end'>
          <Button auto flat color='error' onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Login
          </Button>
          <Row justify='center' align='center' style={{ flexDirection: 'column' }}>
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
          </Row>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default LoginModal;
