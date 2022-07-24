import React from 'react';
import './about.scss';
import img1 from '../../assets/images/about-influencer1.webp';
import img2 from '../../assets/images/272bd6ae.jpg';
const About = () => {
  return (
    <div className='about-sections mb-0 py-5'>
      <div className='container'>
        <h1 className='fs-1 fst-italic text-uppercase text-center'>About US</h1>
        <br />
        <div className='row mb-4 shadow border border-2 shadow-lg' style={{ borderRadius: 15 }}>
          <div className='col-lg-6 col-md-6'>
            <div className='about-image'>
              <img src={img1} alt='Harun Doğdu' style={{ borderRadius: 15, marginLeft: -13 }} />
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
            <div className='text text-center mt-4 text-justify'>
              <h4>About</h4>
              <p className='text-justify'>
                Technology has changed the way we interact with each other. The world is more
                connected than ever. While print is fast becoming obsolete and TV is losing market
                share to digital, personal influence is now shaping our daily decisions. Whether on
                Twitter, YouTube, Instagram, Facebook, Blogs or the next social phenomenon,
                Influencer Connect helps companies effectively spread their story in an age when
                traditional strategies are no longer effective.
              </p>
            </div>
          </div>
        </div>
        <div className='row mb-4 shadow border border-2 shadow-lg ' style={{ borderRadius: 15 }}>
          <div className='col-lg-6 col-md-6 mb-4'>
            <div className='text text-center mt-4'>
              <h4>More</h4>
              <p className='text-justify'>
                We take the complexity of influencer and social media marketing and make it easy.
                How? By doing all of the work. Our game changing technology and pre-vetted network
                of 100,000+ content creators have allowed us to streamline the process so your time
                is not wasted on identifying who to work with but rather on running campaigns and
                seeing the conversation and sales grow.
              </p>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 '>
            <div className='about-image '>
              <img src={img2} alt='Harun Doğdu' style={{ borderRadius: 15, marginLeft: 40 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
