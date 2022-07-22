import React from 'react';
import './footer.scss';
const Footer = () => {
  return (
    <footer className='text-center'>
      <div className='container p-4'>
        <section className=''>
          <div className='row d-flex justify-content-center'>
            <div className='col-auto'>
              <h3 className='pt-1'>Sign up for our newsletter</h3>
            </div>
            <div className='col-md-5 col-12'>
              <div className='input-group input-group'>
                <span className='input-group-text' id='inputGroup-sizing-lg'>
                  Email
                </span>
                <input type='text' className='form-control' />
              </div>
            </div>
            <div className='col-auto'>
              <button type='submit' className='btn btn-md text-uppercase bg-warning mb-4'>
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <section className=''>
          <div className='row'>
            <div className='col-lg-3 col-sm-6 mb-4 mb-md-0'>
              <div className='contaiter'>
                <div className='row '>
                  <h1 className='logo'>iConnect</h1>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Page</h5>

              <ul className='list-unstyled mb-0' style={{ alignItems: 'flex-start' }}>
                <li className='float-left'>
                  <p>Influencer</p>
                </li>
                <li className='float-left'>
                  <p>About</p>
                </li>
                <li>
                  <p>Contact</p>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-sm-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <p>0345648638</p>
                </li>
                <li>
                  <p>hoanle396@gmail.com</p>
                </li>
                <li>
                  <p>Facebook</p>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-sm-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <p className=' '>
                    <i className='fab fa-instagram'></i> Instagram
                  </p>
                </li>
                <li>
                  <p>
                    <i className='fab fa-youtube'></i> Youtube
                  </p>
                </li>
                <li>
                  <p>
                    <i className='fa fa-mail-forward'></i> Email
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='row copyright'>
            <div className='col-lg-12 col-sm-12 mb-12 text-center'>
              <p>
                <small className='block fs-6'>
                  VIETNAM-KOREA UNIVERSITY OF INFORMATIONAND COMMUNICATION TECHNOLOGY{' '}
                </small>{' '}
                <br />
                <small className='block fs-6'>2021 &copy; All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
