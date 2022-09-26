import "./forget-main3.css";
import Quluf from "../../assets/image/quluf.png";

function Forgetmain3() {
  return (
    <div className="container">
      <div className="forget-main3">
        <h3 className="forget-h">Parolni Unutdingizmi?</h3>
        <p className="forget-p">
          Hisobingizga kirish uchun yangi parolni o'rnating!
        </p>

        <form>
          <p className="forget-name">Yangi parolni kiriting</p>
          <div className="forget-box">
            <img src={Quluf} width="20" height="20" alt="mail" />
            <input
              className="forget-input"
              type="password"
              placeholder="*********"
            />
          </div>

          <p className="forget-name">Qayta yangi parol</p>
          <div className="forget-box">
            <img src={Quluf} width="20" height="20" alt="mail" />
            <input
              className="forget-input"
              type="password"
              placeholder="*********"
            />
          </div>

          <button type="submit" className="forget-b">
            Qabul qilsih
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgetmain3;
