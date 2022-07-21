import React from 'react';
import { useTypedSelector } from '../../store/selector';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlay,
  faVolumeUp,
  faPause,
  faForward,
  faBackward,
  faPlus,
  faTrash,
  faSlidersH,
  faChevronLeft,
  faChevronDown,
  faArrowLeft,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faTimes,
  faSearch,
  faExpand,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';

import Editor from './Editor';
import Upload from './Upload';

library.add(
  faPlay,
  faVolumeUp,
  faPause,
  faForward,
  faBackward,
  faPlus,
  faTrash,
  faSlidersH,
  faChevronLeft,
  faChevronDown,
  faArrowLeft,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faTimes,
  faSearch,
  faExpand,
  faUpload,
);

function ImageEdit() {
  const videoFile = useTypedSelector((state) => state.video.video);

  if (videoFile) {
    return <Editor />;
  } else {
    return <Upload />;
  }
}

export default ImageEdit;
