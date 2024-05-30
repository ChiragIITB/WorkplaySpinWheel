import "./css/SpinTheWheelMain.css";
import CustomizePage from "./CustomizePage";
import GameStart from "./GameStart";
import Game from "./Game";
import { useState } from "react";

function SpinTheWheelMain() {
  // const [segment, setSegments] = useState([
  //   "Segment1",
  //   "Segment2",
  //   "Segment3",
  //   "Segment4",
  //   "Segment5",
  // ]);

  return (
    <>
      <div className="SpinTheWheelMain">
        <div className="GameBox">
          <h1>SPIN THE WHEEL</h1>
          <img src="../src/assets/spinwheel.png" alt="spin wheel" />
          <div className="ButtonBox">
            <a href="">
              <button>Play Now</button>
            </a>
            <a href="">
              <button>Customize</button>
            </a>
          </div>
        </div>
      </div>

      <GameStart />
      <Game />
      <CustomizePage />
    </>
  );
}

export default SpinTheWheelMain;
