import { useState } from "react";
import { resetPassword } from "../../redux/actions";

export default function Reset(props) {
  const [reset, setReset] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    resetPassword({email: reset,
    password: ""});
  }

  function handleOnChange(e) {
    setReset(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          placeholder="E-mail"
          onChange={handleOnChange}
        />
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
}
