import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Footer = () => {
  return (
    <footer className='text-center text-white'>
      <div className='container p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' role='button'>
            <FontAwesomeIcon icon={faFaceGrin} />
          </a>

          <a
            className='btn btn-outline-light btn-floating m-1'
            href='mailto:{{$gmail->value}}'
            role='button'
          >
            <i className='fab fa-google'></i>
          </a>

          <a
            className='btn btn-outline-light btn-floating m-1'
            href='{{$youtube->value}}'
            role='button'
          >
            <i className='fab fa-youtube'></i>
          </a>
        </section>
        <section className=''>
          <div className='row d-flex justify-content-center'>
            <div className='col-auto'>
              <p className='pt-2'>
                <strong className='text-primary'>Sign up for our newsletter</strong>
              </p>
            </div>
            <div className='col-md-5 col-12'>
              <div className='input-group input-group-lg'>
                <span className='input-group-text' id='inputGroup-sizing-lg'>
                  Email
                </span>
                <input type='text' className='form-control' />
              </div>
            </div>
            <div className='col-auto'>
              <button type='submit' className='btn btn-lg text-uppercase bg-warning mb-4'>
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <section className=''>
          <div className='row'>
            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
              <div className='contaiter'>
                <div className='row d-flex justify-content-center align-center'>
                  <h1 className='logo'>iConnect</h1>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Page</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href="{{url('car-all')}}">Product</a>
                </li>
                <li>
                  <a href="{{url('feed-back')}}">Contact</a>
                </li>
                <li>
                  <a href="{{url('news')}}">News Page</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='tel:{{$phone->value}}'>0345648638</a>
                </li>
                <li>
                  <a href='mailto:{{$gmail->value}}'>hoanle396@gmail.com</a>
                </li>
                <li>
                  <a href='{{$facebook->value}}'>Facebook</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='{{$facebook->value}}'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a href='{{$gmail->value}}'>
                    <i className='fa fa-mail-forward'></i>
                  </a>
                </li>
                <li>
                  <a href='{{$youtube->value}}'>
                    <i className='fab fa-youtube'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
