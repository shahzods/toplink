import "./policypage.css";
import Header from "../../components/Header/Header";
import Policemain from "../../components/Police-main/Police-main";
import Footer from "../../components/Footer/Footer";

function Policypage() {
  return (
    <div className="policypage">
      <Header />
      <div className="container">
        <h2 className="service-top">Privacy Policy</h2>

        <p className="service-text">Mart 31, 2022 da yangilangan</p>
      </div>

      <Policemain />

      <div className="faq-d"></div>

      <Footer />
    </div>
  );
}

export default Policypage;
