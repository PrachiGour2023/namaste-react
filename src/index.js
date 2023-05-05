import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/*
 <div class = "parent">
   <div class = "child">
      <h3>Namaste React</h3>
      <h2>Namaste Javascript<h2>
   <div>
 </div>
*/

// create element using core react
// reactElement => JS object =>  render(HTML)
const container = React.createElement(
  "div",
  { className: "parent" },
  React.createElement("div", { className: "child" }, [
    React.createElement("h3", {}, "Namaste React"),
    React.createElement("h2", {}, "Namaste Javascript"),
  ])
);
// console.log(container);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
