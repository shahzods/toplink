import "./servicepage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Servicemain from "../../components/Service-main/Service-main";

function Servicepage() {
  return (
    <div className="servicepage">
      <Header />

      <div className="container">
        <h2 className="service-top">Terms Of Service</h2>

        <p className="service-text">Mart 31, 2022 da yangilangan</p>
      </div>

      <Servicemain />

      <div className="faq-d"></div>

      <Footer />
    </div>
  );
}

export default Servicepage;
