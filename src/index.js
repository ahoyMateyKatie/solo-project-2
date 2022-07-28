// will set off the webpack bundling
//require('file-loader?name=[name].[ext]!./index.html')
import { ReactDOM } from "react";
import React, { Component } from "react";
import { Routes, Route, BrowserRouter, Link, Outlet } from "react-router-dom";
import App from "./App.jsx";
import { render } from "react-dom";

// const appElement = document.getElementById('app');

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("app"));

render(
  <App />, document.getElementById("app")
);

//this renders the app component
