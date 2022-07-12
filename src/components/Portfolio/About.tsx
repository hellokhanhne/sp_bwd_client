import React from 'react';
import './portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { Card } from '@nextui-org/react';
const About = ({
  img,
  desc,
  exp,
  follow,
  avg,
}: {
  img: string;
  desc: string;
  exp: string;
  follow: number;
  avg: number;
}) => {
  return (
    <section id='about'>
      <Card className='shadow card-bg'>
        <div className='about-content'>
          <div className='about-image'>
            <img src={img} alt='Harun Doğdu' style={{ borderRadius: 15 }} />
          </div>
          <div className='about-container'>
            <div className='content-container'>
              <div className='content-box'>
                <FontAwesomeIcon icon={faAward} className='icon' />
                <h3>Experience</h3>
                <p>{exp}+ years of experience </p>
              </div>

              <div className='content-box'>
                <FontAwesomeIcon icon={faUser} className='icon' />
                <h3>follower</h3>
                <p>{follow} followers.</p>
              </div>

              <div className='content-box'>
                <FontAwesomeIcon icon={faProjectDiagram} className='icon' />
                <h3>AVG</h3>
                <p>{avg} point</p>
              </div>
            </div>

            <p className='text'>{desc}</p>
            <button className='button button-primary'>See More</button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default About;
