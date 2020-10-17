import React, { useState } from "react";
import { connect } from "react-redux";
import { updateAccountInfo } from "../../../redux/actions/UserProfile";
import styled from "styled-components";

const PwStrengthMeter = styled.div`
  height: 5px;
  width: 60%;
  padding: 0 10px;
  border-radius: 5px;
  background: grey;
  margin-bottom: 10px;
`;

function AccountSetting(props) {
  const [errMsg, setErrMsg] = useState("");
  const [pwErrMsg, setPwErrMsg] = useState("");
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function submitAccountSetting(e) {
    e.preventDefault();
    // Validation
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const pwLowerCaseRegex = /^(?=.*[a-z])/;
    const pwUpperCaseRegex = /^(?=.*[A-Z])/;
    const pwSpecialCharRegex = /^(?=.*[!@#$%^&*])/;
    if (!email || !password || !passwordRepeat) {
      setErrMsg("Please fill in all fields");
      clearErrMsg();
      return;
    }
    if (!emailRegex.test(email)) {
      setErrMsg("Email is invalid");
      clearErrMsg();
      return;
    }
    if (password !== passwordRepeat) {
      setErrMsg("Passwords do not match");
      clearErrMsg();
      return;
    }
    if (!pwLowerCaseRegex.test(password)) {
      setPwErrMsg("Please include at least one lowercase character");
      clearErrMsg();
      return;
    }

    if (!pwUpperCaseRegex.test(password)) {
      setPwErrMsg("Please include at least one uppercase character");
      clearErrMsg();
      return;
    }

    if (!pwSpecialCharRegex.test(password)) {
      setPwErrMsg("Please include at least one special character");
      clearErrMsg();
      return;
    }
    if (email === props.email && password === props.password) {
      setErrMsg("You did not edit any field");
      clearErrMsg();
      return;
    }

    props.updateAccountInfo(email, password);
    setPassword("");
    setPasswordRepeat("");
    alert("success!");
  }

  function clearErrMsg() {
    setTimeout(() => {
      setErrMsg("");
      setPwErrMsg("");
    }, 3000);
  }

  return (
    <form className="account-setting" onSubmit={submitAccountSetting}>
      <div className="form-group">
        {errMsg && <div className="error-message">{errMsg}</div>}
        <label htmlFor="email" className="form-label">
          <b>Email</b>
        </label>
        <input
          type="text"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          <b>Password</b>
        </label>
        <PwStrengthMeter className="pw-strength-meter"></PwStrengthMeter>
        <input
          type="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {pwErrMsg && <div className="password-error-message">{pwErrMsg}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="passwordRepeat" className="form-label">
          <b>Password Repeat</b>
        </label>
        <input
          type="password"
          className="form-input"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        />
      </div>

      <button className="btn btn-primary btn-md">Save Changes</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  const { email, password } = state.userProfile;
  return {
    email,
    password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAccountInfo: (email, password) =>
      dispatch(updateAccountInfo(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSetting);
