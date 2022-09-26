import "./modal.css";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <div className="modal-header">
      <div className="modal">
        <div className="modal-menu">
          <div className="m-link">
            <Link className="modal-link" to="/workpage">
              U qanday ishlaydi
            </Link>
          </div>

          <div className="m-link">
            <Link className="modal-link" to="/featurepage">
              Xususiyat
            </Link>
          </div>

          <div className="m-link">
            <Link className="modal-link" to="/loginpage">
              Kirish
            </Link>
          </div>

          <div className="m-link">
            <Link className="modal-link" to="/register-page">
              Ro'yxatdan o'tish
            </Link>
          </div>
        </div>
        <button class="close-modal">&times;</button>
      </div>
    </div>
  );
}

export default Modal;
