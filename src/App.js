import "./styles/index.scss";
import {Routes, Route, Navigate} from "react-router";
import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import {Header} from "./sharedComponents/Header/Header";
import {Popup} from "./sharedComponents/Popup/Popup";

function App() {
  return (
    <div className="global">
      <Popup />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monthstatistics" element={<MonthStatistics />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
