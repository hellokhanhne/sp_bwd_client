import { FC } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { types } from '../../store/actions/types';

import getRandomId from '../../helpers/getRandomId';

import Icon from '../../components/atoms/Icon';

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  return '#3E4047';
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Dropzone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 20px;
  width: 400px;
  height: 200px;
  color: ${({ theme }) => theme.white};
  font-family: ${({ theme }) => theme.Lato};
  background-color: ${({ theme }) => theme.secondary};
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  border-color: ${(props) => getColor(props)};
  outline: none;
  cursor: pointer;
  z-index: 2;

  &:hover {
    filter: brightness(120%);
  }
`;

const StyledIcon = styled(Icon)`
  margin-bottom: 20px;
`;

const Upload: FC = () => {
  const dispatch = useDispatch();

  const handleFileDrop = (file: File[]) => {
    if (file.length !== 0) {
      const newFile = new File([file[0]], getRandomId(), { type: file[0].type });

      dispatch({
        type: types.SET_VIDEO_FILE,
        payload: newFile,
      });
    }
  };

  const { getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject } = useDropzone({
    multiple: false,
    onDrop: (file) => handleFileDrop(file),
  });

  return (
    <Container>
      <Dropzone {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <StyledIcon name='upload' size={40} color='#fff' />
        <p>Drag and drop mp4 file here, or click to select</p>
      </Dropzone>
    </Container>
  );
};

export default Upload;
