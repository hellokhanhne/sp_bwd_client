import React, { useContext, useState } from 'react';
import { setActionStatus } from '~/features/RemoveBackground';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '~/components/atoms/LoaderRender/Loader';
import { ThemeContext } from '~/context/ThemeContext';
const ImageEditor = () => {
  const status = useSelector((state: any) => state.status.bgRemoved);
  const dispatch = useDispatch();
  const context = useContext(ThemeContext);
  var blob = null;
  const [image, setImage] = useState(null);
  const imgUpload = (e: any) => {
    setImage(e);
  };

  const uploadImage = async (images: any) => {
    dispatch(setActionStatus(false));

    const formData = new FormData();
    formData.append('image_file', images);

    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-Api-Key': 'wuDjk5qZqoBTssWHU6uKTyjX',
      },
      body: formData,
    });

    if (response.status === 200) {
      dispatch(setActionStatus(true));
    } else {
      dispatch(setActionStatus(false));
    }

    const outputBlob = await response.blob();

    blob = URL.createObjectURL(outputBlob);
    const image: any = document.getElementById('imageResult');
    const down: any = document.getElementById('down');
    image.src = blob;
    down.href = blob;
    down.download = 'save.png';
  };
  return (
    <div
      className='row py-4'
      style={{ background: context?.themeState.mode === 'dark' ? '#292c34' : '' }}
    >
      <div className='col-lg-6 mx-auto text-center'>
        <div
          className='input-group mb-3 px-2 py-2 rounded-pill border'
          style={{ boxShadow: `0px 12px 16px 0px rgb(55 83 250 / 12%)` }}
        >
          <input
            id='upload'
            type='file'
            className='form-control border-0 rounded-pill'
            onChange={(e: any) => imgUpload(e.target.files[0])}
          />
          <div className='input-group-append'>
            <label className='btn btn-light m-0 rounded-pill px-4'>
              {' '}
              <i className='fa fa-cloud-upload mr-2 text-muted'></i>
              <small className='text-uppercase font-weight-bold text-muted'>Choose file</small>
            </label>
          </div>
        </div>
        <button
          className={`btn remove-button ${
            context?.themeState.mode === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'
          }`}
          onClick={() => {
            uploadImage(image);
          }}
        >
          Remove Background
        </button>
        <div>
          <div className='row py-4'>
            <div className='col-lg-6 mx-auto text-center'>
              <p className='font-italic  text-center'>
                The result will be rendered inside the box below.
              </p>
              <div className='image-area mt-4 mb-2 justify-content-center'>
                {status === false ? (
                  <Loader />
                ) : (
                  <img
                    id='imageResult'
                    src='#'
                    alt=''
                    className='img-fluid rounded shadow-sm mx-auto d-block'
                  />
                )}{' '}
              </div>
              {status ? (
                <a id='down'>
                  <button className='btn btn-light down-button'>
                    {' '}
                    <i className='fas fa-download' /> Download
                  </button>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
