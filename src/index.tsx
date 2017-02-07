/// <reference path="../typings/index.d.ts" />

import { AppContainer } from "react-hot-loader";

import * as React from "react";
import { render } from "react-dom";

import { App } from "./App";

const rootEl = document.getElementById("root");
const renderApp = (Component:any) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>
    , rootEl
  )
}

renderApp(App);

interface IHotModule {
  hot?: { accept: (path: string, callback: () => void ) => void };
}
declare let module:IHotModule;

if(module.hot) module.hot.accept('./App', () => {
  const NewApp = require('./App').App;
  return renderApp(NewApp)
});