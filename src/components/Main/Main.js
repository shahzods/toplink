import "./main.css";
import Link from "../../assets/image/link.png";
import Socialteam from "../../assets/image/social-team.png";
import Iphones from "../../assets/image/iphones.png";
import Circle from "../../assets/image/circle.png";
import Microsoft from "../../assets/image/Microsoft-Store.svg";
import Mail from "../../assets/image/Mailru.svg";
import Twitter from "../../assets/image/Twitter.svg";
import MasterCard from "../../assets/image/MasterCard.svg";
import Shutter from "../../assets/image/Shutterstock.png";
import Sberbank from "../../assets/image/Sberbank.png";
import Spotify from "../../assets/image/Spotify.svg";

function Main() {
  return (
    <div className="main">
      <div className="main-main">
        <div className="container">
          <h2 className="main-top">Toplinkdan foydalaning</h2>

          <p className="main-text">
            Havolangizga daʼvo qilish uchun pastga foydalanuvchi nomingizni
            kiriting
          </p>

          <div className="main-input">
            <img
              className="link-img"
              src={Link}
              width="25"
              height="25"
              alt="link"
            />

            <input
              className="main-link"
              type="text"
              placeholder="Toplink.co/yourhandle"
            />
          </div>

          <div className="main-one">
            <div className="one-left">
              <h2 className="one-top">Bizni minglab odamlar sevadi</h2>
              <p className="one-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque interdum, felis et bibendum finibus, risus quam
                sollicitudin neque, eu tristique lorem felis nec massa.
                Pellentesque nec ex in nunc cursus posuere at non augue.
              </p>
            </div>
            <div>
              <img
                className="one-right"
                src={Socialteam}
                width="500"
                height="480"
                alt="social-team"
              />
            </div>
          </div>

          <div className="main-two">
            <div className="two-left">
              <img className="two-iphones" src={Iphones} alt="iphones" />
            </div>
            <div className="two-right">
              <h2 className="two-top">Profilingizni shaxsiylashtiring</h2>
              <p className="two-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque interdum, felis et bibendum finibus, risus quam
                sollicitudin neque, eu tristique lorem felis nec massa.
                Pellentesque nec ex in nunc cursus posuere at non augue.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="main-bottom">
        <div className="container">
          <div className="main-three">
            <div className="three-left">
              <h2 className="three-top">
                Har vaqt Toplinkda statistikani qabul qiling
              </h2>
              <p className="three-text">
                Tomoshabinlar qaysi kontentga ko‘proq qiziqish bildirishini
                bilish uchun profil ko‘rinishlari va alohida havola bosishlarini
                kuzating.
              </p>
            </div>
            <div>
              <img
                className="three-right"
                src={Circle}
                width="850"
                height="850"
                alt="circle"
              />

              <div className="microsoft">
                <img
                  className="microsoft-img"
                  src={Microsoft}
                  alt="microsoft"
                />
                <h2 className="num">899</h2>
              </div>
              <div className="mail">
                <img
                  className="mail-img"
                  src={Mail}
                  width="180"
                  height="180"
                  alt="mailru"
                />
                <h2 className="num">1,227</h2>
              </div>
              <div className="twitter">
                <img
                  className="twitter-img"
                  src={Twitter}
                  width="140"
                  height="140"
                  alt="twitter"
                />
                <h2 className="num">1,124</h2>
              </div>
              <div className="mastercard">
                <img
                  className="mastercard-img"
                  src={MasterCard}
                  width="110"
                  height="110"
                  alt="mastercard"
                />
                <h2 className="num">985</h2>
              </div>
              <div className="shutter">
                <img className="shutter-img" src={Shutter} alt="shutterstock" />
                <h2 className="num">680</h2>
              </div>
              <div className="spotify">
                <img
                  className="spotify-img"
                  src={Spotify}
                  width="110"
                  height="110"
                  alt="spotify"
                />
                <h2 className="num">1,035</h2>
              </div>
              <div className="sberbank">
                <img className="sberbank-img" src={Sberbank} alt="sberbank" />
                <h2 className="num">703</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
