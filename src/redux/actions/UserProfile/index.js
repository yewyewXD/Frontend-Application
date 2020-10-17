import { UPDATE_ACCOUNT_INFO, UPDATE_USER_INFO } from "./types";
import axios from "axios";

export async function updateAccountInfo(newEmail, newPassword) {
  const res = await axios.post("/fakeApi/account", { newEmail, newPassword });
  const { email, password } = res.data;
  return {
    type: UPDATE_ACCOUNT_INFO,
    payload: { email, password },
  };
}

export async function updateUserInfo(
  newFirstName,
  newLastName,
  newAddress,
  newCountry
) {
  const res = await axios.post("/fakeApi/user", {
    newFirstName,
    newLastName,
    newAddress,
    newCountry,
  });
  const { firstName, lastName, address, country } = res.data;
  return {
    type: UPDATE_USER_INFO,
    payload: { firstName, lastName, address, country },
  };
}
