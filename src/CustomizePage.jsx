import Wheel from "./Wheel";
import CustomSettings from "./CustomSettings.jsx";
import "./css/CustomizePage.css";

function CustomizePage() {
  return (
    <div className="CustomizePage">
      <img src="../src/assets/WorkplayHeader.png" alt="WorkplayHeaderImage" />
      <div className="CustomizeContainer">
        <div className="SettingsDisplay">
          <Wheel />
          <button>Generate Campaign</button>
          <button>Preview</button>
        </div>

        <CustomSettings />
      </div>
    </div>
  );
}

export default CustomizePage;
