import { Input, Spacer, Textarea } from '@nextui-org/react';
import React from 'react';
import './index.scss';
const Contact = () => {
  return (
    <div className='contact container-fluid'>
      <div className='container'>
        <section className='mb-0 pb-4 pt-2'>
          <h2 className='fs-1 fst-italic fw-bold text-uppercase text-center'>Feed back</h2>
          <p className='text-center w-responsive mx-auto mb-5'>
            Do you have any questions? Please do not hesitate to contact us directly. Our team will
            come back to you within a matter of hours to help you.
          </p>

          <div className='row'>
            <div className='col-md-9 mb-md-0 mb-5'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='md-form mb-0'>
                    <Input
                      clearable
                      bordered
                      labelPlaceholder='Name'
                      size='md'
                      shadow
                      fullWidth
                      color='primary'
                    />
                    <Spacer y={2} />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='md-form mb-0'>
                    <Input
                      clearable
                      bordered
                      labelPlaceholder='Email'
                      size='md'
                      shadow
                      fullWidth
                      color='primary'
                    />
                    <Spacer y={2} />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='md-form mb-0'>
                    <Input
                      clearable
                      bordered
                      labelPlaceholder='Subject'
                      size='md'
                      shadow
                      fullWidth
                      color='primary'
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='md-form'>
                    <Spacer y={2} />
                    <Textarea
                      bordered
                      shadow
                      fullWidth
                      rows={4}
                      color='primary'
                      labelPlaceholder='Enter your message'
                    />
                  </div>
                </div>
              </div>
              <div className='text-center d-flex justify-content-center '>
                <div className='btn-send'>
                  <Spacer y={2} />
                  <button className='button button-primary' type='submit'>
                    {'Send'}
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-3 text-center'>
              <ul className='list-unstyled mb-0'>
                <li>
                  <i className='icon fas fa-map-marker-alt fa-2x '></i>
                  <p>470, Tran Dai Nghia Street, Ngu Hanh Son District, Da Nang City</p>
                </li>

                <li>
                  <i className='icon fas fa-phone mt-4 fa-2x'></i>
                  <p>0345648638</p>
                </li>

                <li>
                  <i className='icon fas fa-envelope mt-4 fa-2x'></i>
                  <p>hoanle396@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
