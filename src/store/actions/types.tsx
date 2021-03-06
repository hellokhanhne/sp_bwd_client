import { videoActions } from './videoAction';
import { timeLineActions } from './timeLineAction';
import { modalActions } from './modalAction';
import { exportActions } from './exportAction';
import { renderActions } from './renderAction';

export type Action = videoActions | timeLineActions | modalActions | exportActions | renderActions;

export enum types {
  SET_VIDEO_FILE = 'SET_VIDEO_FILE',
  SET_VIDEO_DIMENSIONS = 'SET_VIDEO_DIMENSIONS',
  SET_VIDEO_LENGTH = 'SET_VIDEO_LENGTH',
  SET_VIDEO_REF = 'SET_VIDEO_REF',
  SET_VIDEO_VOLUME = 'SET_VIDEO_VOLUME',
  SET_VIDEO_PLAY = 'SET_VIDEO_PLAY',
  SET_VIDEO_CURRENT_DURATION = 'SET_VIDEO_CURRENT_DURATION',
  SET_VIDEO_DURATION = 'SET_VIDEO_DURATION',
  SET_VIDEO_FULLSCREEN = 'SET_VIDEO_FULLSCREEN',

  CREATE_NEW_TRACK = 'CREATE_NEW_TRACK',
  DELETE_TRACK = 'DELETE_TRACK',
  MOVE_TRACK = 'MOVE_TRACK',
  UPDATE_TRACK_NAME = 'UPDATE_TRACK_NAME',
  ADD_ITEM_TO_TRACK = 'ADD_ITEM_TO_TRACK',
  DELETE_ITEM_FROM_TRACK = 'DELETE_ITEM_FROM_TRACK',
  UPDATE_ITEM_TRACK = 'UPDATE_ITEM_TRACK',
  SET_TIMELINE_REF = 'SET_TIMELINE_REF',
  UPDATE_ITEM_TRACK_POSITION = 'UPDATE_ITEM_TRACK_POSITION',
  UPDATE_ITEM_TRACK_SIZE = 'UPDATE_ITEM_TRACK_SIZE',

  UPDATE_ITEM_POSITION = 'UPDATE_ITEM_POSITION',
  UPDATE_CLICKED_ITEM = 'UPDATE_CLICKED_ITEM',
  UPDATE_ITEM_COLOR = 'UPDATE_ITEM_COLOR',
  UPDATE_ITEM_OPACITY = 'UPDATE_ITEM_OPACITY',
  UPDATE_ITEM_RATIO = 'UPDATE_ITEM_RATO',

  UPDATE_TEXT_OPTIONS = 'UPDATE_TEXT_OPTIONS',

  UPDATE_MODAL_DATA = 'UPDATE_MODAL_DATA',

  SET_EXPORT_STATE = 'SET_EXPORT_STATE',

  SET_RENDER_STATUS = 'SET_RENDER_STATUS',
  SET_RENDER_MESSAGE = 'SET_RENDER_MESSAGE',
  SET_RENDER_ERROR = 'SET_RENDER_ERROR',
}
