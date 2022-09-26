import "./register-main.css";
import User from "../../assets/image/user.png";

function Registermain() {
  return (
    <div className="container">
      <div className="registermain">
        <h2 className="register-top">Ro‘yxatdan o‘tish</h2>
        <p className="register-text">
          O‘zingiz haqingizda ma’lumotlarni kiriting
        </p>

        <form>
          <div className="l-one">
            <p className="l-p">To‘liq ism</p>
            <span className="register-input">
              <img src={User} width="24" height="24" alt="user" />
              <input
                className="l-input"
                type="text"
                placeholder="Ex. Saul Ramirez"
              />
            </span>
          </div>

          <div className="l-two">
            <p className="l-p">Telefon nomer</p>
            <span className="register-input2">
              <input
                className="l-input"
                type="tel"
                placeholder="Telefon nomer"
              />
            </span>
          </div>

          <button type="submit" className="register-link">
            Qabul qilish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registermain;
