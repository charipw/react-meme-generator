import React from "react";
import trollFace from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header--container">
      <div className="header--left--side">
        <img src={trollFace} className="header--img" />
        <h1>Meme Generator</h1>
      </div>
      <p>React Course - Project 3</p>
    </header>
  );
}
