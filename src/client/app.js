import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main";
import Map from "./components/map";
import "../../node_modules/mapbox-gl/dist/mapbox-gl.css";
import "./scss/style.scss";

ReactDOM.render(<Map />, document.querySelector("#app"));
