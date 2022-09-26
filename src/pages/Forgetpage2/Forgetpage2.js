import "./forgetpage2.css";
import Header from "../../components/Header/Header";
import Left from "../../assets/image/left.png";
import Right from "../../assets/image/right.png";
import Forgetmain2 from "../../components/Forget-main2/Forget-main2";

function Forgetpage2() {
  return (
    <div className="forgetpage2">
      <Header />

      <Forgetmain2 />

      <img className="left" src={Left} alt="l" />
      <img className="right" src={Right} alt="r" />
    </div>
  );
}

export default Forgetpage2;
