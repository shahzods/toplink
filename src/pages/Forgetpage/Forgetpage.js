import "./forgetpage.css";
import Header from "../../components/Header/Header";
import Left from "../../assets/image/left.png";
import Right from "../../assets/image/right.png";
import Forgetmain from "../../components/Forget-main/Forget-main";

function Forgetpage() {
  return (
    <div className="forgetpage">
      <Header />

      <Forgetmain />

      <img className="left" src={Left} alt="l" />
      <img className="right" src={Right} alt="r" />
    </div>
  );
}

export default Forgetpage;
