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
  loader: () => importer(import("./pages/HomePage")),
  loading: loadingComponent
});

const ResumePage = Loadable({
  loader: () => importer(import("./pages/ResumePage")),
  loading: loadingComponent
});

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/resume" exact={true} component={ResumePage} />
    </Switch>
  );
};
