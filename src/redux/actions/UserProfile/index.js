import { UPDATE_ACCOUNT_INFO, UPDATE_USER_INFO } from "./types";

export function updateAccountInfo() {
  return {
    type: UPDATE_ACCOUNT_INFO,
    payload: {},
  };
}

export function updateUserInfo() {
  return {
    type: UPDATE_USER_INFO,
    payload: {},
  };
}
