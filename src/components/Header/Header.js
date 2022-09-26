import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import Burger from "../../assets/image/burger.png";
import Modal from "../Modal/Modal";

function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <div>
          <Link to="/">
            <img className="header-logo" src={Logo} alt="Toplink" />
          </Link>
        </div>

        <div className="header-menu">
          <div className="">
            <Link className="header-left " to="/workpage">
              U qanday ishlaydi
            </Link>
          </div>
          <div className="m-lefts">
            <Link className="header-left" to="/featurepage">
              Xususiyat
            </Link>
          </div>
          <div className="m-left">
            <Link className="header-right right-l" to="/loginpage">
              Kirish
            </Link>
          </div>
          <div className="m-lefts">
            <Link className="header-right right-r" to="/register-page">
              Ro'yxatdan o'tish
            </Link>
          </div>
        </div>

        <button className="burger">
          <img src={Burger} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Header;
