import { useEffect, useState } from "react";
import AppLoad from "./components/common/AppLoad";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import * as AuthService from "@src/services/auth.service";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import Thunk from "redux-thunk";

// import { signIn } from '@src/state/auth/auth';
import "@src/assets/css/_common.scss";

 interface UserType {
  email: string,
  username: string,
  password: string,
}

const App = () => {
  const [currentUser, setCurrentUser] = useState<UserType | undefined>(undefined);
 
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    const userLanguage = navigator.language;
    if (userLanguage && userLanguage.includes("ko-")) {
      localStorage.setItem("lang", "ko");
    } else {
      localStorage.setItem("lang", userLanguage);
    }
    if (user) {
      setCurrentUser(user);
    }

  }, [])


  const store = createStore(rootReducer, applyMiddleware(Thunk))
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <GlobalBar/>
          <Routes>
            {!currentUser ? (
              <>
                <Route path='/login' element={<AuthLogin/>} />
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
          {currentUser && (
            <GlobalMap/>
          )}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
 