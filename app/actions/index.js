import axios from 'axios';

export const SAVE_COMMENT = 'save_comment';
export const CHANGE_AUTH = 'change_auth';

const API_KEY = '';
const ROOT_URL = ``;

export function saveComment(comment) {

  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function authenticate(isLoggedIn) {

  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
