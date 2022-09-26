import "./loginpage.css";
import Header from "../../components/Header/Header";
import Loginmain from "../../components/Login-main/Login-main";
import Left from "../../assets/image/left.png";
import Right from "../../assets/image/right.png";

function Loginpage() {
  return (
    <div className="loginpage">
      <Header />

      <Loginmain />

      <img className="left" src={Left} alt="l" />
      <img className="right" src={Right} alt="r" />
    </div>
  );
}

export default Loginpage;
