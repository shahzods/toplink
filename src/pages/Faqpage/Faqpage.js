import "./faqpage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Faqmain from "../../components/Faq-main/Faq-main";

function Faqpage() {
  return (
    <div className="faqpage">
      <Header />

      <div className="container">
        <h2 className="faq-top">FAQ</h2>
      </div>

      <Faqmain />

      <div className="faq-d"></div>

      <Footer />
    </div>
  );
}

export default Faqpage;
