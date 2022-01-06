import { useState } from "react";
import AppLoad from "./views/AppLoad";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalBar from "./components/common/GlobalBar";
import GlobalMap from "./components/common/GlobalMap";
import AuthLogin from "./components/auth/Login";
import ParcelList from "./views/ParcelList";
import ParcelDetail from "./views/ParcelDetail";
import ParcelAdd from "./views/ParcelAdd";
import ParcelEvent from "./views/ParcelEvent";
import ParcelProfile from "./views/ParcelProfile";
// import LoggedInRoute from "./views/AuthInRoute";

import UserType from "@src/types/user.type";

import { signIn } from '@src/state/auth/auth';

import './App.css';
import "@src/assets/css/_common.scss";


const App = () => {
  const [currentUser, setCurrentUser] = useState<UserType | undefined>(undefined);
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  // const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <div className="App">
      <Router>
        <GlobalBar/>
        <AppLoad/>
        <Routes>
          <Route path='/login' element={<AuthLogin/>} />
          <Route path='/' element={<ParcelList/>} />
          <Route path='/detail/:tracking_no' element={<ParcelDetail/>} />
          <Route path='/add' element={<ParcelAdd/>} />
          <Route path='/event' element={<ParcelEvent/>} />
          <Route path='/profile' element={<ParcelProfile/>} />
        </Routes>
        <GlobalMap/>
      </Router>
    </div>
  );
}

export default App;
 