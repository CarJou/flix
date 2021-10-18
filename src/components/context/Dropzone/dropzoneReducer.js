import {
  CLEAR_ALERT,
  SHOW_ALERT,
  UPLOAD_FILE,
  UPLOAD_FILE_ERROR,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,

        msg_file: action.payload,
      };

    case CLEAR_ALERT:
      return {
        ...state,
        msg_file: null,
      };

    case UPLOAD_FILE:
      return {
        ...state,
        name_original: action.payload.name_original,
      };
    default:
      return state;
  }
};
