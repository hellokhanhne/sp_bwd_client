import React from 'react';
import './slider.scss';
import japane from '~/assets/images/guss_languages_japan-1220x732.jpg';
import korea from '~/assets/images/korea.jpg';
import america from '~/assets/images/north-america.webp';
import australia from '~/assets/images/shutterstock.jpg';
interface Iprops {
  slides: ISlider[];
}
interface ISlider {
  city: string;
  country?: string;
  img: string;
}
interface Istate {
  activeSlide: number;
  prevSlide: number;
  sliderReady: boolean;
}

export class CitiesSlider extends React.Component {
  IMAGE_PARTS: number;
  changeTO: any | null;
  AUTOCHANGE_TIME: number;
  state: Istate;
  constructor(props: Iprops) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }
  slides = [
    {
      city: 'Tokyto',
      country: 'Japane',
      img: japane,
    },
    {
      city: 'South',
      country: 'Korea',
      img: korea,
    },
    {
      city: 'North',
      country: 'America',
      img: america,
    },
    {
      city: 'shutterstock',
      country: 'australia',
      img: australia,
    },
  ];

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change: number) {
    window.clearTimeout(this.changeTO);
    const length = 4;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
      <div className={`slider ${sliderReady}?'s--ready':""}`}>
        <p className='slider__top-heading'>Travelers</p>
        <div className='slider__slides'>
          {this.slides.map((slide: ISlider, index: number) => (
            <div
              className={`slider__slide ${activeSlide === index ? 's--active' : ''} ${
                prevSlide === index ? 's--prev' : ''
              }`}
              key={index}
            >
              <div className='slider__slide-content'>
                <h3 className='slider__slide-subheading'>{slide.country || slide.city}</h3>
                <h2 className='slider__slide-heading'>
                  {slide.city.split('').map((l: string,index) => (
                    <span key={index}>{l}</span>
                  ))}
                </h2>
                <p className='slider__slide-readmore'>read more</p>
              </div>
              <div className='slider__slide-parts'>
                {[...Array(this.IMAGE_PARTS)].map((_, i) => (
                  <div className='slider__slide-part' key={i}>
                    <div
                      className='slider__slide-part-inner'
                      style={{ backgroundImage: `url(${slide.img})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <div className='slider__control' onClick={() => this.changeSlides(-1)} />
        <div
          className='slider__control slider__control--right'
          onClick={() => this.changeSlides(1)}
        /> */}
      </div>
    );
  }
}
