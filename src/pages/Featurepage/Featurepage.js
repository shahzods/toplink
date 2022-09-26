import "./featurepage.css";
import Header from "../../components/Header/Header";
import Xususiyatmain from "../../components/Xususiyat-main/Xususiyat-main";
import Footer from "../../components/Footer/Footer";

function Featurepage() {
  return (
    <div className="featurepage">
      <Header />
      <Xususiyatmain />
      <div className="div"></div>
      <Footer />
    </div>
  );
}

export default Featurepage;
