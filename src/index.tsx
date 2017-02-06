/// <reference path="../typings/index.d.ts" />

import { AppContainer } from "react-hot-loader";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./app";

interface IHotModule {
  hot?: { accept: (path: string, callback: () => void ) => void };
}
declare const module:IHotModule;

const rootEl = document.getElementById("root");
const render = (Component:any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>
    , rootEl
  )
}

render(App);
if(module.hot) module.hot.accept('./app', () => render(App));