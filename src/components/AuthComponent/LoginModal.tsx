import { Button, Checkbox, Input, Modal, Row, Text } from '@nextui-org/react';
import { Mail, Password } from '../icons';
import React, { useContext } from 'react';
import { ThemeContext } from '~/context/ThemeContext';
import Google from '../icons/Google';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { Auth } from '~/api/Auth.api';
import { setIsLogin, setUserInfor } from '~/features/AuthSlice';
import { toastEmit } from '~/utils/toasify';
import { setInfor } from '~/features/UserSlice';

const LoginModal = () => {
  const [visible, setVisible] = React.useState(false);
  const context = useContext(ThemeContext);
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handler = () => setVisible(true);
  const closeHandler = () => setVisible(false);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    if (username == '' || password == '') {
      toastEmit({ message: "Can't be left empty", type: 'error' });
    } else {
      Auth.Login({ username, password })
        .then((res) => {
          const data = res.data;
          window.localStorage.setItem('token', data.access_token);
          dispatch(
            setUserInfor({
              fullname: data.user.fullname,
              email: data.user.email,
              avatar: data.user.avatar,
              roles: data.user.roles,
              isVerify: data.user.isVerify,
            }),
          );
          dispatch(setIsLogin(true));
          dispatch(setInfor(data.infor));
          setVisible(false);
          toastEmit({ message: 'Login successfuly!', type: 'success' });
        })
        .catch((err) => {
          toastEmit({ message: err.data.message, type: 'error' });
        });
    }
  };

  // const isLogin = useSelector((state: any) => state.auth);
  const responseGoogle = async (response: any) => {
    if (response.tokenId) {
      await Auth.loginGoogle({
        idToken: response.tokenId,
        email: response.profileObj.email,
      })
        .then(async (respone) => {
          const data = respone.data.data;
          window.localStorage.setItem('token', data.access_token);
          dispatch(
            setUserInfor({
              fullname: data.user.fullname,
              email: data.user.email,
              avatar: data.user.avatar,
              roles: data.user.roles,
              isVerify: data.user.isVerify,
            }),
          );
          dispatch(setIsLogin(true));
          dispatch(setInfor(data.infor));
          toastEmit({ message: 'Login successfuly!', type: 'success' });
          setVisible(false);
        })
        .catch((err) => {
          toastEmit({ message: err.data.message, type: 'error' });
        });
    }
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
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            contentLeft={<Mail fill='currentColor' />}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color='primary'
            size='lg'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <Button auto onClick={handleLogin}>
            Login
          </Button>
          <Row justify='center' align='center' style={{ flexDirection: 'column' }}>
            <hr className='hr-text' data-content='OR' style={{ width: '50%' }} />
            <GoogleLogin
              clientId='970416655854-pp42pikachlr2g7m96tngejs8vhaacbs.apps.googleusercontent.com'
              onSuccess={(e) => responseGoogle(e)}
              onFailure={(e) => responseGoogle(e)}
              autoLoad={false}
              render={(renderProps) => (
                <Button
                  rounded
                  bordered
                  ghost
                  color='primary'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  icon={<Google />}
                  style={{ width: '70%' }}
                >
                  Continue with google
                </Button>
              )}
            />
          </Row>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default LoginModal;
