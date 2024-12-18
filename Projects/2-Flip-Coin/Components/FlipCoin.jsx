import React, { useState } from "react";
import "../public/css/flipCoin.css";

function FlipCoin() {
  let [count, setCount] = useState(0);
  let [randomNumber, setRandomNumber] = useState(0);
  let [tailCount, setTailCount] = useState(0);
  let [headCount, setHeadCount] = useState(0);

  const handleFlip = () => {
    const randomNumber = Math.ceil(Math.random() * 2); // 1 ya da 2 donduruyor
    setRandomNumber(randomNumber);
    setCount(count + 1);
    randomNumber === 1
      ? setHeadCount(headCount + 1)
      : setTailCount(tailCount + 1);
  };
  return (
    <div className="card-wrapper">
      <h2>Let's flip a coin</h2>
      <div>
        {randomNumber && randomNumber === 1 ? (
          <img src="../1TL_onYuz.png" alt="Türk madeni parasının arka yüzü" />
        ) : (
          <img
            src="../public/1TL_arkaYuz.png"
            alt="Türk madeni parasının on yüzü"
          />
        )}
      </div>
      <button onClick={handleFlip} className="flipMeBtn">
        Flip Me!
      </button>
      <p className="result">
        Out of {count} flips, there have been {headCount} heads and {tailCount}
        tails
      </p>
    </div>
  );
}

export default FlipCoin;
