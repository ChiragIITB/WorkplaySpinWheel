import "./css/BackgroundSettings.css";

function BackgroundSettings() {
  return (
    <div className="BackgroundSettings setting">
      <form action="" className="BackgroundColorForm">
        <label htmlFor="backgroundColorInput">Background Color Change</label>
        <input type="color" id="backgroundColorInput" />
      </form>

      <form action="" className="BackgroundImageForm">
        <label htmlFor="backgroundImageInput">Add background image</label>
        <input type="file" id="backgroundImageInput" />
        <p>- PNG, SVG, JPG, JPEG, HEIC, (#)WebP (MIN. 1920 x 1080)</p>
      </form>
    </div>
  );
}

export default BackgroundSettings;
