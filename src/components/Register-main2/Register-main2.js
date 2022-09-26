import "./register-main2.css";
import Email from "../../assets/image/email.png";
import Quluf from "../../assets/image/quluf.png";
import Silka from "../../assets/image/silka.png";
import { Link } from "react-router-dom";

function Registermain2() {
  return (
    <div className="container">
      <div className="registermain2">
        <h2 className="register-top2">Ro‘yxatdan o‘tish</h2>
        <p className="register-text2">
          Barcha xarajatlar va daromadlaringizni bir joyda kuzatib borish uchun
          hozir roʻyxatdan oʻting!
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

          <div className="l2-one">
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

          <div className="l2-three">
            <p className="l-p">Foydalanuvchi nomi</p>
            <span className="register2-input">
              <img src={Silka} width="20" height="20" alt="silka" />
              <input
                className="l2-input"
                type="text"
                placeholder="Ex. Saul Ramirez"
              />
            </span>
          </div>

          <Link to="/register-page2">
            <button type="submit" className="register2-link">
              Ro‘yxatdan o‘tish
            </button>
          </Link>
        </form>

        <div className="register2-bottom">
          <p className="r2-bottom">Accountingiz mavjudmi?</p>
          <Link className="r2-link" to="/loginpage">
            Kirish
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registermain2;
