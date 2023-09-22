import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const {formState,onInputChange,username,email,password,onResetForm} =  useForm( {
    username: "",
    email: "",
    password: "",
  })
   //const {username,email,password} =formState
  return (
    <div className="container p-5">
      <h1>SimpleFormCustomHook</h1>
      <hr />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="UserName@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mb-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className=" btn btn-outline-success" onClick={onResetForm}>Reset</button>
    </div>
  );
};
