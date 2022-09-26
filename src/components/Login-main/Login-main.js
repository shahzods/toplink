import "./login-main.css";
import Email from "../../assets/image/email.png";
import Quluf from "../../assets/image/quluf.png";
import { Link } from "react-router-dom";

function Loginmain() {
  return (
    <div className="container">
      <div className="Loginmain">
        <h2 className="register-top2">Kirish</h2>
        <p className="register-text2">
          Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish uchun
          hozir tizimga kiring!
        </p>

        <form>
          <div className="l2-one">
            <p className="l-p">Elektron pochta</p>
            <span className="register2-input">
              <img src={Email} width="20" height="20" alt="mail" />
              <input
                className="l2-input"
                type="email"
                placeholder="Ex: abc@example.com"
              />
            </span>
          </div>

          <div className="l2-two">
            <p className="l-p">Parol</p>
            <span className="register2-input">
              <img src={Quluf} width="20" height="20" alt="qoluf" />
              <input
                className="l2-input"
                type="password"
                placeholder="*********"
              />
            </span>
          </div>

          <Link className="login-back" to="/forgetpage">
            Parolni unutdingizmi?
          </Link>

          <button type="submit" className="login-link">
            Kirish
          </button>
        </form>

        <div className="login-bottom">
          <p className="l-bottom">Accountingiz mavjud emasmi?</p>
          <Link className="l-link" to="/register-page">
            Ro‘yxatdan o‘tish
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Loginmain;
