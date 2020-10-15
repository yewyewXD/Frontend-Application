import { UPDATE_ACCOUNT_INFO, UPDATE_USER_INFO } from "./types";

export function updateAccountInfo(email, password) {
  return {
    type: UPDATE_ACCOUNT_INFO,
    payload: { email, password },
  };
}

export function updateUserInfo(firstName, lastName, address, country) {
  return {
    type: UPDATE_USER_INFO,
    payload: { firstName, lastName, address, country },
  };
}
