import AppLoad from "./views/AppLoad";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalBar from "./components/common/GlobalBar";
import GlobalMap from "./components/common/GlobalMap";
import ParcelList from "./views/ParcelList";
import ParcelAdd from "./views/ParcelAdd";
import ParcelProfile from "./views/ParcelProfile";
import './App.css';
import "@src/assets/css/_common.scss";


function App() {

  return (
    <div className="App">
      <Router>
        <GlobalBar/>
        <AppLoad/>
        <Routes>
          <Route path='/' element={<ParcelList/>} />
          <Route path='/add' element={<ParcelAdd/>} />
          <Route path='/profile' element={<ParcelProfile/>} />
        </Routes>
        <GlobalMap/>
      </Router>
    </div>
  );
}

export default App;
 