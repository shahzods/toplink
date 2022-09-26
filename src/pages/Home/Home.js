import "./home.css";
import { Link } from "react-router-dom";
import Man from "../../assets/image/man.png";
import Telegram from "../../assets/image/Telegram.jpg";
import Shazam from "../../assets/image/Shazam.svg";
import Safari from "../../assets/image/Safari.svg";
import Amazon from "../../assets/image/Amazon.svg";
import PayPal from "../../assets/image/PayPal.svg";
import Steam from "../../assets/image/Steam.svg";
import Snapchat from "../../assets/image/Snapchat.svg";
import Facebook from "../../assets/image/Facebook.svg";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <div className="homepage">
      <Header />
      <div className="home-page">
        <div className="container">
          <div className="home">
            <div className="home-big">
              <h1 className="home-top">Endi sizga faqat Toplink kerak</h1>
              <p className="home-text">
                Bir marta bosish orqali izdoshlaringiz bilan ko'proq baham
                ko'ring. Toplink barcha kontentingizga bir joyda ulanishni
                osonlashtiradi.
              </p>
              <Link className="home-link" to="/register-page">
                Toplink-dan bepul foydalaning
              </Link>
              <p className="hero-status">
                Bu haftada 5318 kishi roʻyxatdan oʻtgan!
              </p>
            </div>

            <div className="arrow">
              <img className="man" src={Man} alt="a man" />
              <img
                className="telegram"
                src={Telegram}
                width="26"
                height="26"
                alt="a telegram"
              />
              <img
                className="shazam"
                src={Shazam}
                width="32"
                height="32"
                alt="a shazam"
              />
              <img
                className="safari"
                src={Safari}
                width="32"
                height="32"
                alt="a safari"
              />
              <img
                className="amazon"
                src={Amazon}
                width="36"
                height="36"
                alt="an amazon"
              />
              <img
                className="paypal"
                src={PayPal}
                width="36"
                height="36"
                alt="a paypal"
              />
              <img
                className="steam"
                src={Steam}
                width="36"
                height="36"
                alt="a steam"
              />
              <img
                className="snapchat"
                src={Snapchat}
                width="36"
                height="36"
                alt="a snapchat"
              />
              <img
                className="facebook"
                src={Facebook}
                width="36"
                height="36"
                alt="a facebook"
              />
            </div>
          </div>
        </div>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
