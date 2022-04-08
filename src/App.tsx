import { useEffect, useState } from "react";
import AppLoad from "./components/common/AppLoad";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import GlobalBar from "./components/common/GlobalBar";
import GlobalMap from "./components/common/GlobalMap";
import AuthLogin from "./components/auth/Login";
// import ParcelList from "./views/ParcelList";
import ParcelList from "./container/ParcelList";
import ParcelDetail from "./container/ParcelDetail";
import ParcelAdd from "./container/ParcelAdd";
import ParcelEvent from "./container/ParcelEvent";
import ParcelProfile from "./container/ParcelProfile";
// import LoggedInRoute from "./views/AuthInRoute";
import { RootState } from '@src/modules';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoginStatus } from '@src/modules/auth';
// import { signIn } from '@src/state/auth/auth';
import "@src/assets/css/_common.scss";

 interface UserType {
  email: string,
  username: string,
  password: string,
}

const App = () => {
  const { isLogedIn } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkLoginStatus());

    const userLanguage = navigator.language;
    if (userLanguage && userLanguage.includes("ko-")) {
      localStorage.setItem("lang", "ko");
    } else {
      localStorage.setItem("lang", userLanguage);
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <GlobalBar/>
        <Routes>
          <Route
            path="/login"
            element={
              isLogedIn ? (
                <Navigate replace to="/"/>
              ) : (
                <AuthLogin/>
              )
            }
          />
          {!isLogedIn ? (
            <>
              <Route path='*' element={<AppLoad/>} />
            </>
          ) : (
            <>
              <Route path='/' element={<ParcelList/>} />
              <Route path='/detail/:tracking_no' element={<ParcelDetail/>} />
              <Route path='/add' element={<ParcelAdd/>} />
              <Route path='/event' element={<ParcelEvent/>} />
              <Route path='/profile' element={<ParcelProfile/>} />
            </>
          )}
        </Routes>
        {isLogedIn && (
          <GlobalMap/>
        )}
      </Router>
    </div>
  );
}

export default App;
 