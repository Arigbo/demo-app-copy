// import logo from './logo.svg';
import "./App.css";
// import ".home.scss";
// import "./login.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomeComp from "./components/pages/home";
// import DroppleComp from "./components/pages/dropple";
// import DriverComp from "./components/elvis/src/components/pages/driver";
// import AboutComp from "./components/elvis/src/components/pages/about";
// import LoginComp from "./components/projects/login";
// import ErrorComp from "./components/elvis/src/components/pages/error";
// import FooterComp from "./components/footer";

// import DriverComp from "./components/David/src/component/Driver";
// import HomeComp from "./projects/home";
// import DriverComp from "./projects/Driver";
// import DroppleComp from "./projects/dropple";
// import ButtonComp from "./projects/button";
// import LoginComp from "./projects/login";
// import ErrorComp from "./projects/error";
// import FooterComp from "./projects/footer";
// import NavComp from "./projects/nav";
// import PlayComp from "./projects/play";
import AboutPage from "./projects/AboutPage";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
    <NavComp/>
        <Routes>
          {/* <Route path="/" index element={<HomeComp />}></Route>
          <Route path="/dropple" element={<DroppleComp />}></Route>
          <Route path="/driver" element={<DriverComp />}></Route> */}
          <Route path="/aboutpage" element={<AboutPage />}></Route>
          {/* <Route path="/login" element={<LoginComp />}></Route>
          <Route path="*" element={<ErrorComp />}></Route> */}
        </Routes>
        <ButtonComp/>
        <FooterComp />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
