import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const AuthInRoute = ({
  component: Component,
  ...otherProps
}: IProps) => (
  <Routes>
    <Route>
      d
    </Route>
    {/* <Component/> */}
  </Routes>
);
export default AuthInRoute;