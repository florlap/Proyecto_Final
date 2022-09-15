import { useState } from "react";
import { resetPassword } from "../../redux/actions";
import style from "./reset.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanerUser} from "../../redux/actions";


export default function Reset() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [email, setEmail] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    resetPassword({
      type: "RESET",
      email: email
    });
    dispatch(cleanerUser());
    setEmail("")
    navigate("/login");

  }

  function handleOnChange(e) {
    setEmail(e.target.value);

  }
  return (
    <div>
    <div className={style.contenedor}>
      <form className={style.reset} onSubmit={handleOnSubmit}>
      <div className={style.message}>
            <label>Ingrese correo para restablecer contraseña</label>
          </div>
          <div className={style.email}>
          <input
          type="email"
          name="email"
          value={email}
          placeholder="E-mail..."
          onChange={handleOnChange}
        />
        </div>
        <div className={style.send}>
        <input type="submit" value="enviar" />
        </div>
      </form>
    </div>
    </div>
  );
}
