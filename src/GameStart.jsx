import "./css/GameStart.css";

function GameStart() {
  return (
    <div className="GameStart">
      <div className="StartContainer">
        <img src="../src/assets/WorkplayHeader.png" alt="WORKPLAY" />
        <h2>Welcome to the Spin the Wheel Game!</h2>
        <p>
          Enter your email address and start the game to win exciting rewards
        </p>

        <form action="">
          <input type="email" placeholder="eg : abc@example.com" />
          <button>START</button>
        </form>
      </div>
    </div>
  );
}

export default GameStart;
