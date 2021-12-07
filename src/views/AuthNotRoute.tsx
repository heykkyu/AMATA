import * as React from "react";
import { Route } from "react-router-dom";

interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const AuthNotRoute = ({
  component: Component,
}: IProps) => (
  <>
    <Route element={<Component/>} />
  </>
);
export default AuthNotRoute;