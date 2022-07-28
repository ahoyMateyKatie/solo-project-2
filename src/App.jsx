// main entry point for react
// need to change to jsx
import { ReactDOM } from "react";
import React, { Component } from "react";
import { Routes, Route, BrowserRouter, Link, Outlet } from "react-router-dom";

import LocationCreator from "./components/LocationCreator.jsx";
import LocationDisplay from "./components/LocationDisplay.jsx";

import "./stylesheets/styles.css";
// import app from "../server/server.js";
// import LocationDisplay from "./components/LocationDisplay.jsx";
// import { render } from 'sass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      description: "",
      restaurant: "",
      date: "",
    };
  }

  // this will get rendered in index.html
  render() {
    return (
      <div className="router">
        <main>
          <LocationCreator />
          <LocationDisplay />
        </main>
      </div>
    );
  }
}

// export function App() {
//     return (
//         <div>
//             <h1>Hello World Travel Itinerary</h1>
//         </div>
//     );
// }

//don't need this because we are already rendering.
// ReactDOM.render(
// <BrowserRouter>
//   <App />
// </BrowserRouter>,
// document.getElementById("app"));

export default App;
