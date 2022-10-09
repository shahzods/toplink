import "./workpage.css";
import Iphone1 from "../../assets/image/iPhone1.png";
import Iphone2 from "../../assets/image/iPhone2.png";
import Iphone3 from "../../assets/image/iPhone3.png";
import Havolalar from "../../assets/image/havolalar.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import React from "react";
import Fade from "react-reveal/Fade";

function Workpage() {
  return (
    <div className="works">
      <Header />
      <div className="work">
        <div className="container">
          <Fade bottom>
            <h2 className="work-top">U qanday ishlaydi</h2>
          </Fade>
          <Fade bottom>
            <p className="work-text">
              Bizning universal havolamiz sizning do‘stlaringizga barcha
              kontentingizga bir joydan kirish imkonini beradi va sizga ko'proq
              baham ko'rish imkonini beradi.
            </p>
          </Fade>
          <Fade bottom>
            <div className="work-box">
              <div className="boxs">
                <img
                  className="apple-tel"
                  src={Iphone1}
                  width="271"
                  height="500"
                  alt="iphone"
                />
                <div className="texts">
                  <h4 className="box-top">Toplinkda hisobingizni yarating</h4>
                  <p className="box-text">
                    Foydalanuvchi nomini tanlang, profilingizni sozlang va
                    havolalaringizni qo'shing.
                  </p>
                </div>
              </div>
              <div className="boxs">
                <img
                  className="apple-tel"
                  src={Iphone2}
                  width="271"
                  height="500"
                  alt="iphone"
                />
                <div className="texts">
                  <h4 className="box-top">Linkdan koproq foydalaning</h4>
                  <p className="box-text">
                    Havolani nusxa oling va undan istalgan ijtimoiy platformada
                    foydalaning.
                  </p>
                </div>
              </div>
              <div className="boxs">
                <img
                  className="apple-tel"
                  src={Iphone3}
                  width="271"
                  height="500"
                  alt="iphone"
                />
                <div className="texts">
                  <h4 className="box-top">
                    Kontentingizni ko'proq baham ko'ring
                  </h4>
                  <p className="box-text">
                    Bitta kuchli havola orqali obunachilaringizga koʻproq
                    maʼlumotlarga kirish imkonini bering.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <h2 className="next-top">
              Sizning havolalaringiz. Sizning kontentingiz.
            </h2>
            <p className="next-text">
              Har qanday platformadan havola qo'shing. Quyida bizning
              sevimlilarimizdan ba'zilari
            </p>
            <img
              className="havolalar"
              src={Havolalar}
              width="1110"
              alt="havolalar"
            />
          </Fade>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Workpage;
