import React from "react";
import Loadable, { LoadingComponentProps } from "react-loadable";
import { Switch, Route } from "react-router-dom";
import { LoadingAnimation } from "./components/Shared/LoadingAnimation";

const importer = (promise: Promise<any>) => {
  return promise.finally();
};

const loadingComponent = (props: LoadingComponentProps) => (
  <LoadingAnimation {...props} />
);

const HomePage = Loadable({
  loader: () => importer(import("./pages/Home")),
  loading: loadingComponent
});

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
    </Switch>
  );
};
