import "./css/TextSettings.css";

function TextSettings() {
  return (
    <div className="TextSettings setting">
      <form>
        <label htmlFor="TextSizeSLider">
          <div>Tt</div>
        </label>
        <input type="range" min={8} max={24} id="TextSizeSlider" />
      </form>

      <select name="FontStyle" id="FontStyle">
        <option value="Arial ,san-serif">Arial, san-serif</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Verdana">Verdana</option>
      </select>
    </div>
  );
}

export default TextSettings;
