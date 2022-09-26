import "./forget-main.css";
import Email from "../../assets/image/email.png";
import { Link } from "react-router-dom";

function Forgetmain() {
  return (
    <div className="container">
      <div className="forget-main">
        <h3 className="forget-h">Parolni Unutdingizmi?</h3>
        <p className="forget-p">
          Agar parolni unutgan bo'lsangiz, parolingizni tiklang!
        </p>

        <form>
          <p className="forget-name">Elektron pochta</p>
          <div className="forget-box">
            <img src={Email} width="20" height="20" alt="mail" />
            <input
              className="forget-input"
              type="email"
              placeholder="Ex: abc@example.com"
            />
          </div>

          <Link to="/forgetpage2">
            <button type="submit" className="forget-b">
              Qabul qilsih
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Forgetmain;
