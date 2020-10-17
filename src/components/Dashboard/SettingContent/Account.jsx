import React, { useState } from "react";
import { connect } from "react-redux";
import { updateAccountInfo } from "../../../redux/actions/UserProfile";
import styled from "styled-components";

function AccountSetting(props) {
  const [errMsg, setErrMsg] = useState("");
  const [pwStrengthScore, setPwStrengthScore] = useState(0);
  const [pwErrMsg, setPwErrMsg] = useState("");
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const pwStrengthColor = () => {
    if (pwStrengthScore === 1) {
      return "red";
    } else if (pwStrengthScore === 2) {
      return "orangered";
    } else if (pwStrengthScore === 3) {
      return "orange";
    } else if (pwStrengthScore === 4) {
      return "green";
    }
  };

  const regexCheck = (regex, value) => regex.test(value);

  const PwStrengthMeter = styled.div`
    display: ${password.length > 0 ? "block" : "none"};
    transition: 0.3s;
    height: 5px;
    width: ${pwStrengthScore * 15}%;
    padding: 0 10px;
    border-radius: 5px;
    background: ${pwStrengthColor};
    margin-bottom: 10px;
  `;

  function submitAccountSetting(e) {
    e.preventDefault();
    // Validation
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email || !password || !passwordRepeat) {
      setErrMsg("Please fill in all fields");
      clearErrMsg();
      return;
    }
    if (!regexCheck(emailRegex, email)) {
      setErrMsg("Email is invalid");
      clearErrMsg();
      return;
    }
    if (password !== passwordRepeat) {
      setErrMsg("Passwords do not match");
      clearErrMsg();
      return;
    }

    if (email === props.email && password === props.password) {
      setErrMsg("You did not edit any field");
      clearErrMsg();
      return;
    }

    if (pwStrengthScore !== 4) {
      setErrMsg("Password is not strong enough");
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
    }, 3000);
  }

  function handlePwValidation(e) {
    let pwStrengthCount = 0;
    const pwValue = e.target.value;
    setPassword(pwValue);
    if (pwErrMsg) {
      setPwErrMsg("");
    }
    const lowercaseRegex = /^(?=.*[a-z])/;
    const uppercaseRegex = /^(?=.*[A-Z])/;
    const specialCharRegex = /^(?=.*[!@#$%^&*])/;

    if (!pwValue) {
      setPwErrMsg("");
    } else {
      if (regexCheck(specialCharRegex, pwValue)) {
        pwStrengthCount++;
      } else {
        setPwErrMsg("Please use at least one special character");
      }

      if (regexCheck(uppercaseRegex, pwValue)) {
        pwStrengthCount++;
      } else {
        setPwErrMsg("Please use at least one uppercase character");
      }

      if (pwValue.trim().length > 8) {
        pwStrengthCount++;
      } else {
        setPwErrMsg("Please enter at least 8 characters");
      }

      if (regexCheck(lowercaseRegex, pwValue)) {
        pwStrengthCount++;
      } else {
        setPwErrMsg("Please use at least one lowercase character");
      }
    }

    setPwStrengthScore(pwStrengthCount);
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
          onChange={handlePwValidation}
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
