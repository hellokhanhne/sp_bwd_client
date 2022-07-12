import CardTop from '~/components/Card/CardTop';
import About from '~/components/Portfolio/About';
import { IconSlide } from '~/components/Slider/IconSlider';
import { MarqueeSlide } from '~/components/Slider/MarqueSlide';
import { CitiesSlider } from '~/components/Slider/Slider';
import Title from '~/components/Title/Title';
import { topdata } from '~/constants/data';
import './index.scss';
const Home = () => {
  return (
    <div className='home container-fluid pt-5'>
      <div className='container justify-content-center mb-4'>
        <h1 className='text-center logo mb-5'>iConnect Global</h1>
        {/* <h3 className='text-center'>
          <b>Global</b>
        </h3> */}
        <div className='row d-flex justify-content-center'>
          {topdata.map((item, i) => (
            <div key={i} className='col-12 col-md-4 col-lg-3  mb-4' data-aos='zoom-in-right'>
              <CardTop
                cardTitle={item.title}
                cardSubtitle={item.sub}
                value={item.value}
                color={item.color}
              />
            </div>
          ))}
        </div>
        <div className='text-center mt-5'>
          <Title title='Influencers to grow' text='Why do influencers love iConnect?' />
        </div>
        <div className='row d-flex mt-3 justify-content-center'>
          <About
            img='http://mcvideomd1fr.keeng.net/playnow/images/channel/avatar/20200429/YHIwrx6UKeaeJ3QA.jpg'
            avg={77}
            desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dignissimos reiciendis similique inventore, eaque at praesentium molestias nihil modi, quam delectus corrupti laudantium ...'
            exp='3'
            follow={364739}
            data-aos='fade-up'
          />
        </div>
      </div>
      <div className='row d-flex justify-content-center mh-100'>
        <MarqueeSlide />
      </div>
      <CitiesSlider />
      <div className='position-fixed fixed-bottom'>
        <IconSlide />
      </div>
    </div>
  );
};

export default Home;
