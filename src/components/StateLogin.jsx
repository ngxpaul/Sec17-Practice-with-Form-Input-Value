import React, { useState } from "react";
import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });
  const [isEdit, setIsEdit] = useState({
    email: false,
    password: false,
  });

  function handleInputBlur(identifier) {
    setIsEdit((prevValue) => ({
      ...prevValue,
      [identifier]: true,
    }));
  }

  //   function handleInputChange(identifier,event){
  // setEnteredValue(prevValue=>(
  //   {
  //     ...prevValue,
  //     [identifier]:event.target.value
  //   }
  // ))
  //   }

  //=======================================Alternative way to handle multiple input fields=======================
  function handleInputChange(identifier, value) {
    setEnteredValue((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));
    setIsEdit((prevValue) => ({
      ...prevValue,
      [identifier]: false,
    }));
  }

  function handelSubmit(event) {
    event.preventDefault();
    console.log("User entered value: ", enteredValue);
    setEnteredValue({
      email: "",
      password: "",
    });
  }
  const emailIsInvalid =  isEdit.email  && !isEmail(enteredValue.email)  && !isNotEmpty(enteredValue.email) ;
  const passwordIsInvalid =
    isEdit.password && !hasMinLength(enteredValue.password, 6);
  // function handleEmailChange(event) {
  //   setEnteredValue(event.target.value);
  // }
  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }
  return (
    <form onSubmit={handelSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValue.email}
          error={emailIsInvalid && "Please entered a valid email address"}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={enteredValue.password}
          error={passwordIsInvalid && "Please entered a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
