import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const AuthInRoute = ({ exact = false, path, component }: IProps) => (
  <>
    {/* <Route exact={exact} path={path} component={component}>
    </Route> */}
  </>
);
export default AuthInRoute;