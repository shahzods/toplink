import Home from "./pages/Home/Home";
import Workpage from "./pages/Workpage/Workpage";
import Featurepage from "./pages/Featurepage/Featurepage";
import Loginpage from "./pages/Loginpage/Loginpage";
import Registerpage from "./pages/Registerpage/Registerpage";
import Registerpage2 from "./pages/Registerpage2/Registerpage2";
import Faqpage from "./pages/Faqpage/Faqpage";
import Servicepage from "./pages/Servicepage/Servicepage";
import Policypage from "./pages/Policypage/Policypage";
import Forgetpage from "./pages/Forgetpage/Forgetpage";
import Forgetpage2 from "./pages/Forgetpage2/Forgetpage2";
import Forgetpage3 from "./pages/Forgetpage3/Forgetpage3";
import { Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workpage" element={<Workpage />} />
          <Route path="/featurepage" element={<Featurepage />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/register-page" element={<Registerpage />} />
          <Route path="/register-page2" element={<Registerpage2 />} />
          <Route path="/faqpage" element={<Faqpage />} />
          <Route path="/servicepage" element={<Servicepage />} />
          <Route path="/policypage" element={<Policypage />} />
          <Route path="/forgetpage" element={<Forgetpage />} />
          <Route path="/forgetpage2" element={<Forgetpage2 />} />
          <Route path="/forgetpage3" element={<Forgetpage3 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
