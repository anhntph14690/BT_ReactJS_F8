import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Bai2_10 from "./page/Bai2/2.10";
import Bai2_5 from "./page/Bai2/2.5";
import Bai2_7 from "./page/Bai2/2.7";
import Bai2_8 from "./page/Bai2/2.8";
import Home from "./page/home";
import './css/dropdown.css'
import Bai3_17 from "./page/Bai3/3.17";
import Bai4_27 from "./page/Bai4/4.27";
import BaiState from "./page/Hooks/BaiState";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="bai2"> */}
          <Route path="bai2_5" element={<Bai2_5 />} />
          <Route path="bai2_7" element={<Bai2_7 />} />
          <Route path="bai2_8" element={<Bai2_8 />} />
          <Route path="bai2_10" element={<Bai2_10 />} />
        {/* </Route> */}
        <Route path="bai3_17" element={<Bai3_17 />} />
        <Route path="bai4_27" element={<Bai4_27 />} />
        <Route path="bai4_27" element={<Bai4_27 />} />
        <Route path="baiUseState" element={<BaiState />} />



        
      </Routes>
    </div>
  );
}

export default App;
