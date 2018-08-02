import * as React from "react";
import MyButton from "./MyButton";
import "./MyForm.css";

const MyForm: React.SFC = () => {
  const formSubmit = (event: React.FormEvent<EventTarget>) => {
    alert("form clicked" + event.target);
    event.preventDefault();
  };

  return (
    <form className="my-form" onSubmit={formSubmit}>
      <input className="my-input" type="text" placeholder="test" />
      <MyButton />
    </form>
  );
};

export default MyForm;
