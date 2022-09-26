import "./forgetpage3.css";
import Header from "../../components/Header/Header";
import Left from "../../assets/image/left.png";
import Right from "../../assets/image/right.png";
import Forgetmain3 from "../../components/Forget-main3/Forget-main3";

function Forgetpage3() {
  return (
    <div className="forgetpage3">
      <Header />

      <Forgetmain3 />

      <img className="left" src={Left} alt="l" />
      <img className="right" src={Right} alt="r" />
    </div>
  );
}

export default Forgetpage3;
