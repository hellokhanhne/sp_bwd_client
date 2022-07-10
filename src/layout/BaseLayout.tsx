import { Header } from '~/components/Header';
import useScript from '~/hooks/useScript';
const urls = [
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/66/three.min.js',
  'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
  'https://s3-eu-west-1.amazonaws.com/three-globe-assets/js/TrackballControls.js',
  'https://s3-eu-west-1.amazonaws.com/three-globe-assets/js/geodata.js',
  'https://s3-eu-west-1.amazonaws.com/three-globe-assets/js/threeGeoJSON.js',
  'index.js',
];
const BaseLayout = () => {
  urls.forEach((u) => {
    console.log(u);
    useScript(u);
  });
  return (
    <>
      <Header />
      <div className='mt-5 slider-banner '>
        <div className='left  d-flex justify-content-end'></div>
      </div>
    </>
  );
};

export default BaseLayout;
