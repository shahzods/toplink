import "./registerpage.css";
import Header from "../../components/Header/Header";
import Registermain2 from "../../components/Register-main2/Register-main2";
import Left from "../../assets/image/left.png";
import Right from "../../assets/image/right.png";

function Registerpage() {
  return (
    <div className="registerpage">
      <Header />

      <Registermain2 />

      <img className="left" src={Left} alt="l" />
      <img className="right" src={Right} alt="r" />
    </div>
  );
}

export default Registerpage;
