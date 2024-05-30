import PrizeSettingSegment from "./PrizeSettingSegment.jsx";
import "./css/PrizeSettings.css";

function PrizeSettings({ segments, segmentColors, segmentFontColors }) {
  return (
    <div className="PrizeSettings setting">
      <select name="Scenario" id="Scenario">
        <option label="Select Win or Lose Scenario for each slice"></option>
        {segments.map((segment, index) => {
          return (
            <option value="index">
              <div>{segment}</div>
              {/* <div>
                <select name="WinLose" id="WinLose">
                  <option value="Win">Win</option>
                  <option value="Lose">Lose</option>
                </select>
              </div> */}
            </option>
          );
        })}
      </select>

      {segments.map((segmentData, index) => {
        return (
          <PrizeSettingSegment
            segmentData={segmentData}
            index={index}
            segmentColors={segmentColors}
            segmentFontColors={segmentFontColors}
          />
        );
      })}
    </div>
  );
}

export default PrizeSettings;
