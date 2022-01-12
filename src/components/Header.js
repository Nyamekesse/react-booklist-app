import React from "react";
import Button from "./Button";

const Header = ({ title, addForm, addFormState }) => {
  return (
    <header>
      <h2>{title}</h2>
      <Button
        color={addFormState ? "red" : "green"}
        text={addFormState ? "Close" : "Add"}
        btnClick={addForm}
      />
    </header>
  );
};

export default Header;
