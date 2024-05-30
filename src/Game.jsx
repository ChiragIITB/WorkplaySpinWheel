import "./css/Game.css";
import Wheel from "./Wheel";

function Game() {
  return (
    <div className="Game">
      <div className="GameContainer">
        <img src="../src/assets/WorkplayHeader.png" alt="WORKPLAY" />
        <Wheel />
      </div>
    </div>
  );
}

export default Game;
