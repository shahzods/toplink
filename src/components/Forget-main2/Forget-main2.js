import "./forget-main2.css";
import { Link } from "react-router-dom";

function Forgetmain2() {
  return (
    <div className="container">
      <div className="forget-main">
        <h3 className="forget-h">Parolni Unutdingizmi?</h3>
        <p className="forget-p2">
          Biz sizning elektron pochtangizga tasdiqlash kodi bilan xat yubordik!
        </p>

        <form>
          <p className="forget-name">Verification Code</p>
          <div className="forget-box">
            <input
              className="forget-input2"
              type="email"
              placeholder="EX: 123456"
            />
          </div>

          <Link to="/forgetpage3">
            <button type="submit" className="forget-b">
              Qabul qilsih
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Forgetmain2;
