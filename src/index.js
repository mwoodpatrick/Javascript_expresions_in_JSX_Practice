//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const fName = "Mark";
const lName = "Wood-Patrick";

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>Created by {fName + " " + lName}}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
