import React, { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });
  const [isEdit,setIsEdit] = useState( {
    email: false,
    password: false
     });

  function handleInputBlur(identifier){
    setIsEdit(prevValue=>({
      ...prevValue,
      [identifier]:true
    }))
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
    setIsEdit(prevValue=>({
      ...prevValue,
      [identifier]:false
    }))
  }

  function handelSubmit(event) {
    event.preventDefault();
    console.log("User entered value: ", enteredValue);
    setEnteredValue({
      email: "",
      password: "",
    });
  }
  const emailIsValid = isEdit.email && !enteredValue.email.includes("@");
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={()=>handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValue.email}
          />
          <div className="control-error">{emailIsValid && <p>Please entered a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
