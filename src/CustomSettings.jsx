import "./css/CustomSettings.css";
import TextSettings from "./TextSettings.jsx";
import BackgroundSettings from "./BackgroundSettings.jsx";
import PrizeSettings from "./PrizeSettings.jsx";

function CustomSettings() {
  const segments = [
    "40% off",
    "60% off",
    "10% off",
    "20% 0ff",
    "90% off",
    "No luck today",
  ];

  const segmentColors = [
    "#183b45",
    "#00a877",
    "#367588",
    "#183b45",
    "#00a877",
    "#367588",
  ];

  const segmentFontColors = [
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
    "#FFFFFF",
  ];

  return (
    <div className="CustomSettings setting">
      <TextSettings></TextSettings>
      <BackgroundSettings></BackgroundSettings>

      <form action="" className="userInfo">
        <input type="checkbox" id="userInfo" />
        <label htmlFor="userInfo">Collect user information</label>
      </form>

      <PrizeSettings
        segments={segments}
        segmentColors={segmentColors}
        segmentFontColors={segmentFontColors}
      />

      <button className="ResetButton setting">Reset</button>
      <button className="SaveButton setting">Save</button>
      <div></div>
    </div>
  );
}

export default CustomSettings;
