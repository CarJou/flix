import { CLEAR_ALERT, SHOW_ALERT } from '../../types';

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
    default:
      return state;
  }
};
