import "./xususiyat-main.css";
import Apple1 from "../../assets/image/iPhone3.png";
import Apple2 from "../../assets/image/iPhone4.png";
import Apple3 from "../../assets/image/iphones.png";
import Apple4 from "../../assets/image/iPhone5.png";
import Apple5 from "../../assets/image/iPhone6.png";
import Apple6 from "../../assets/image/iPhone7.png";
import Apple7 from "../../assets/image/iPhone8.png";

import Circle from "../../assets/image/circle.png";
import Microsoft from "../../assets/image/Microsoft-Store.svg";
import Mail from "../../assets/image/Mailru.svg";
import Twitter from "../../assets/image/Twitter.svg";
import MasterCard from "../../assets/image/MasterCard.svg";
import Shutter from "../../assets/image/Shutterstock.png";
import Sberbank from "../../assets/image/Sberbank.png";
import Spotify from "../../assets/image/Spotify.svg";

function Xususiyatmain() {
  return (
    <div className="container">
      <h2 className="x-top">Xususiyat</h2>
      <p className="x-text">
        Bizning universal havolamiz sizning do‘stlaringizga barcha
        kontentingizga bir joydan kirish imkonini beradi va sizga ko'proq baham
        ko'rish imkonini beradi.
      </p>

      <div className="x-one">
        <div>
          <h3 className="xone-top x-h">
            Yagona havola orqali bir nechta yo‘nalishlar
          </h3>
          <p className="xone-text x-t">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum, felis et bibendum finibus, risus quam
            sollicitudin neque, eu tristique lorem felis nec massa. Pellentesque
            nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Pellentesque interdum, felis et
            bibendum finibus, risus
          </p>
        </div>

        <div>
          <img className="apple-tel" src={Apple1} alt="apple" />
        </div>
      </div>

      <div className="x-two">
        <div>
          <img className="apple-tel" src={Apple2} alt="apple" />
        </div>

        <div className="xtwo-right x-right">
          <h3 className="xtwo-top x-h">Haqiqiy vaqt tahlili</h3>
          <p className="xtwo-text x-t">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum, felis et bibendum finibus, risus quam
            sollicitudin neque, eu tristique lorem felis nec massa. Pellentesque
            nec ex in nunc cursus posuere at non augue. Pellentesque nec ex in
            nunc cursus posuere at non augue.
          </p>
        </div>
      </div>

      <div className="x-three">
        <div>
          <h3 className="xthree-top x-h">Profilni moslashtirish</h3>
          <p className="xthree-text x-t">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum, felis et bibendum finibus, risus quam
            sollicitudin neque, eu tristique lorem felis nec massa. Pellentesque
            nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Pellentesque interdum, felis et
            bibendum finibus, risus
          </p>
        </div>

        <div>
          <img className="apple-tell" src={Apple3} alt="apple" />
        </div>
      </div>

      <div className="x-four">
        <div>
          <img className="apple-tel" src={Apple4} alt="apple" />
        </div>

        <div className="xfour-right x-right">
          <h3 className="xfour-top x-h">Boshqarilishi oson</h3>
          <p className="xfour-text x-t">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum, felis et bibendum finibus, risus quam
            sollicitudin neque, eu tristique lorem felis nec massa. Pellentesque
            nec ex in nunc cursus posuere at non augue.
          </p>
        </div>
      </div>

      <div className="main-three">
        <div className="three-left">
          <h3 className="three-top x-h">Har vaqt hamma joyda ishlaydi</h3>
          <p className="three-text x-t">
            Tomoshabinlar qaysi kontentga ko‘proq qiziqish bildirishini bilish
            uchun profil ko‘rinishlari va alohida havola bosishlarini kuzating.
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
            <img className="microsoft-img" src={Microsoft} alt="microsoft" />
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

      <div className="x-five">
        <div>
          <img className="apple-tel" src={Apple5} alt="apple" />
        </div>

        <div className="xfive-right x-right">
          <h3 className="xfive-top x-h">Displey rejimi</h3>
          <p className="xfive-text x-t">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum, felis et bibendum finibus, risus quam
            sollicitudin neque, eu tristique lorem felis nec massa. Pellentesque
            nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Pellentesque interdum, felis et
            bibendum finibus, risus quam sollicitudin neque, eu tristique lorem
            felis nec massa. Pellentesque nec ex in nunc cursus posuere at non
            augue.
          </p>
        </div>
      </div>

      <div className="x-five x-f">
        <div className="xfive-right x-right">
          <h3 className="xfive-top x-h">
            Yagona havola orqali bir nechta yo‘nalishlar
          </h3>
          <p className="xfive-text x-t">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum, felis et bibendum finibus, risus quam
            sollicitudin neque, eu tristique lorem felis nec massa. Pellentesque
            nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Pellentesque interdum, felis et
            bibendum finibus, risus
          </p>
        </div>

        <div>
          <img className="apple-tel" src={Apple1} alt="apple" />
        </div>
      </div>

      <div className="x-five">
        <div>
          <img className="apple-tel" src={Apple6} alt="apple" />
        </div>

        <div className="xfive-right x-right">
          <h3 className="xfive-top x-h">Haqiqiy vaqt tahlili</h3>
          <p className="xfive-text x-t">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum, felis et bibendum finibus, risus quam
            sollicitudin neque, eu tristique lorem felis nec massa. Pellentesque
            nec ex in nunc cursus posuere at non augue. Pellentesque nec ex in
            nunc cursus posuere at non augue.
          </p>
        </div>
      </div>

      <div className="x-five x-f">
        <div className="xfive-right x-right">
          <h3 className="xfive-top x-h">
            Yagona havola orqali bir nechta yo‘nalishlar
          </h3>
          <p className="xfive-text x-t">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum, felis et bibendum finibus, risus quam
            sollicitudin neque, eu tristique lorem felis nec massa. Pellentesque
            nec ex in nunc cursus posuere at non augue. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Pellentesque interdum, felis et
            bibendum finibus, risus
          </p>
        </div>

        <div>
          <img className="apple-tel" src={Apple7} alt="apple" />
        </div>
      </div>
    </div>
  );
}

export default Xususiyatmain;
