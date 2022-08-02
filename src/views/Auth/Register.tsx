import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Input, Spacer, Text } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { Auth, UserRoles } from '~/api/Auth.service';
import { Mail, Password } from '~/components/icons';
import Google from '~/components/icons/Google';
import { setIsLogin, setUserInfor } from '~/features/AuthSlice';
import { toastEmit } from '~/utils/toasify';
import './register.scss';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordComfrim, setPasswordComfirm] = useState('');
  const [roles, _] = useState(UserRoles.Influencer);
  const handleRegister = async () => {
    if (fullname == '' || email == '' || password == '' || passwordComfrim == '') {
      toastEmit({ message: "Can't be left empty", type: 'error' });
    } else if (password !== passwordComfrim) {
      toastEmit({ message: 'Password comfrim incorrect', type: 'error' });
    } else {
      const res = await Auth.Register({ fullname, email, password, roles });
      console.log(res);
      if (res.status == 200) {
        toastEmit({ message: 'Resgister successfuly!', type: 'success' });
      } else {
        toastEmit({ message: res.data.message, type: 'error' });
      }
    }
  };
  const dispatch = useDispatch();

  // const isLogin = useSelector((state: any) => state.auth);
  const responseGoogle = async (response: any) => {
    if (response.tokenId) {
     
      const res = await Auth.loginGoogle({ idToken: response.tokenId, email: response.profileObj.email })
      if (res.status == 200) {
        const data = res.data.data
        window.localStorage.setItem("token", data.access_token)
        dispatch(setUserInfor({fullname:data.user.fullname,email:data.user.email,avatar:data.user.avatar,roles:data.user.roles,isVerify:data.user.isVerify}))
        dispatch(setIsLogin(true));
        toastEmit({ message: 'Login successfuly!', type: 'success' });
      }
    } 
  };
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
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  contentLeft={<FontAwesomeIcon icon={faUser} />}
                />
                <Spacer y={1} />
                <Input
                  clearable
                  bordered
                  fullWidth
                  color='primary'
                  type={'email'}
                  size='lg'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  contentLeft={<Password fill='currentColor' />}
                />
                <Spacer y={1} />
                <Input.Password
                  clearable
                  bordered
                  fullWidth
                  color={`${passwordComfrim === password ? 'primary' : 'error'}`}
                  size='lg'
                  placeholder='Password comfrim'
                  value={passwordComfrim}
                  onChange={(e) => setPasswordComfirm(e.target.value)}
                  contentLeft={<Password fill='currentColor' />}
                />
              </Card.Body>
              <Card.Footer css={{ flexDirection: 'column' }}>
                <Button rounded bordered ghost style={{ width: '70%' }} onPress={handleRegister}>
                  Sign Up
                </Button>
                <hr className='hr-text' data-content='OR' style={{ width: '50%' }} />
                <GoogleLogin
                  clientId='970416655854-pp42pikachlr2g7m96tngejs8vhaacbs.apps.googleusercontent.com'
                  onSuccess={(e)=>responseGoogle(e)}
                  onFailure={(e)=>responseGoogle(e)}
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
