import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Milton",
    email: "milton@gmail.com",
  });
  const { username, email } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  


  
  return (
    <div className="container p-5">
      <h1>SimpleForm</h1>
      <hr />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="UserName"
        name="username"
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control"
        placeholder="UserName@gmail.com"
        name="email"
        onChange={onInputChange}
      />
      {
        username ==='Milton2' &&  <Message />
      }
  
    </div>
  );
};
