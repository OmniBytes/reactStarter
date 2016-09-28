import axios from 'axios';

export const SAVE_COMMENT = 'save_comment';

const API_KEY = '';
const ROOT_URL = ``;

export function saveComment(comment) {

  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}
