import React from "react";
import memeData from "../memeData";

export default function Meme() {
  function memeGenerator() {
    // console.log("You clicked!")
    const memeArray = memeData.data.memes;
    const memeIndex = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[memeIndex].url;
    console.log(url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={memeGenerator} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
