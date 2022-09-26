import "./registerpage2.css";
import Registermain from "../../components/Register-main/Register-main";
import Header from "../../components/Header/Header";
import Left from "../../assets/image/left.png";
import Right from "../../assets/image/right.png";

function Registerpage2() {
  return (
    <div className="registerpage2">
      <Header />

      <Registermain />

      <img className="left" src={Left} alt="l" />
      <img className="right" src={Right} alt="r" />
    </div>
  );
}

export default Registerpage2;
