import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <h2 className="footer-top">Bugunoq Toplink jamoasiga qo'shiling</h2>
        <p className="footer-text text-one">
          O'z izdoshlariga o'zlarining barcha mazmunini kashf qilishda yordam
          berish uchun Toplink-dan foydalanadigan minglab foydalanuvchilarga
          qo'shiling.
        </p>
        <div className="link-box">
          <Link className="footer-link" to="/register-page">
            Toplink-dan bepul foydalaning
          </Link>
        </div>
        <p className="footer-text text-two">
          Bu haftada 5318 kishi roʻyxatdan oʻtgan!
        </p>
        <div className="footer-links">
          <Link className="links" to="/workpage">
            U qanday ishlaydi
          </Link>
          <Link className="links" to="/featurepage">
            Xususiyat
          </Link>
          <Link className="links" to="/faqpage">
            FAQ
          </Link>
          <Link className="links" to="/servicepage">
            Terms Of Service
          </Link>
          <Link className="links" to="/policypage">
            Privacy Policy
          </Link>
        </div>
        <p className="footer-text text-three">
          Copyright © 2022 Toplink All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
